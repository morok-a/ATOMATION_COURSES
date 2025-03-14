import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import path from 'path';
import { PetService } from 'src/services/pets-service';
import { PetDto } from 'src/models/pet-dto';
import { expect } from 'chai';

describe ('Pet Service Pact Test', () => {
    let petService: PetService;

    const provider = new PactV3({
        consumer: 'pet-service-v3',
        provider: 'pet-provider-v3'
    });

    const petResponseExample: Partial<PetDto> = {
        id: 2,
        category: {
            id: 2,
            name: 'Sandy'
        },
        name: 'GrKyh',
        photoUrls: ['string'],
        tags: [{ id: 2, name: 'Sandy' }],
        status: 'available'
    };

    const expectedBody = MatchersV3.like(petResponseExample);

    describe('Consumer tests using Pact V3', () => {
        it('Pet service returns expected response', () => {
            provider
                .given('Pet exists')
                .uponReceiving('a request to get pet by id')
                .withRequest({
                    method: 'GET',
                    path: '/v2/pet/2'
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: expectedBody
                });

            return provider.executeTest(async (mockProvider) => {
                petService = new PetService(mockProvider.url);
                const pet = await petService.getPet(2);
                expect(pet.data).to.have.property('id').that.is.a('number');
                expect(pet.data).to.have.property('name').that.is.a('string');
                expect(pet.data).to.have.property('category').that.is.an('object');
                expect(pet.data.category).to.have.property('id').that.is.a('number');
                expect(pet.data.category).to.have.property('name').that.is.a('string');
                expect(pet.data).to.have.property('photoUrls').that.is.an('array');
                expect(pet.data).to.have.property('tags').that.is.an('array');
                expect(pet.data).to.have.property('status').that.is.a('string');
            });
        });

        it('Pet service returns 404 for non-existent pet', () => {
            provider
                .given('Pet does not exist')
                .uponReceiving('a request to get a non-existent pet')
                .withRequest({
                    method: 'GET',
                    path: '/v2/pet/9999'
                })
                .willRespondWith({
                    status: 404,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: {
                        code: 404,
                        type: 'error',
                        message: 'Pet not found'
                    }
                });

            return provider.executeTest(async (mockProvider) => {
                petService = new PetService(mockProvider.url);
                try {
                    await petService.getPet(9999);
                    expect.fail('Expected an error for non-existent pet');
                } catch (error: unknown) {
                    if (error instanceof Error && 'response' in error) {
                        const axiosError = error as any;
                        expect(axiosError.response.status).to.equal(404);
                        expect(axiosError.response.data).to.have.property('code', 404);
                        expect(axiosError.response.data).to.have.property('type', 'error');
                        expect(axiosError.response.data).to.have.property('message', 'Pet not found');
                    } else {
                        expect.fail('Unexpected error type');
                    }
                }
            });
        });
    });
    describe('Provider Verification', () => {
        it('Should verify matching with service', () => {
            return new Verifier({
                providerBaseUrl: 'https://petstore.swagger.io/v2',
                pactUrls: [path.resolve(process.cwd(), './pacts/pet-service-v3-pet-provider-v3.json')]
            })
                .verifyProvider();
        });
    });
});
