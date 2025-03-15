import { expect } from 'chai';
import { ConfigService } from 'src/services/config.service';
import { FetchApiService } from 'src/services/fetch-service';
import { JokesApi } from 'src/the-jokes-api/jokes-api';

describe('Jokes API Tests', () => {
    let jokesApi: JokesApi;
    beforeEach(() => {
        const configService = new ConfigService();
        const apiConfig = configService.getConfig().api.theJokesApi;
        const fetchApiService = new FetchApiService(apiConfig.baseUrl);
        jokesApi = new JokesApi(fetchApiService);
    });

    describe('Response status OK', () => {
        it('should return a 200 status code', async () => {
            const response = await jokesApi.getRandomJoke();
            expect(response[0].status).to.equal(200);
        });
    });
    describe('getRandomJoke', () => {
        it('should return a random joke', async () => {
            const [response, joke] = await jokesApi.getRandomJoke();
            expect(response.ok).to.be.true;
            expect(joke).to.be.an('object');
            expect(joke).to.have.property('id');
            expect(joke).to.have.property('setup');
            expect(joke).to.have.property('punchline');
        });
    });

    describe('getType', () => {
        it('should return an array of joke types', async () => {
            const [response, types] = await jokesApi.getType();
            expect(response.ok).to.be.true;
            expect(types).to.be.an('array').with.length.greaterThan(0);
        });
    });

    describe('Each type is a string', () => {
        it('should check that types are string', async () => {
            const [response, types] = await jokesApi.getType();
            expect(response.ok).to.be.true;
            types.forEach(type => {
                expect(type).to.be.a('string');
            });
        });
    });

    describe('getMultipleJokes', () => {
        it('should return an array of jokes', async () => {
            const [response, jokes] = await jokesApi.getMultipleJokes(2);
            expect(response.ok).to.be.true;
            expect(jokes).to.be.an('array');
        });
    });
});
