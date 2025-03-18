import { JokeDto } from 'src/dto/joke.dto';
import { IApiService } from '../interfaces/api-service';

export class JokesApi{
    public constructor (private apiService: IApiService) {}

    public async getRandomJoke(): Promise<[Response, JokeDto[]]> {
        const response = await this.apiService.get('/jokes/random');
        const responseJson = await response.json();
        return await [response as Response, responseJson];
    }

    public async getMultipleJokes(count: number): Promise<[Response, JokeDto[]]> {
        const response = await this.apiService.get('/jokes/random', {count});
        const responseJson = await response.json();
        return [response as Response, Array.isArray(responseJson) ? responseJson : [responseJson]];
    }

    public async getType(): Promise<[Response, JokeDto[]]> {
        const response = await this.apiService.get('/types');
        const responseJson = await response.json();
        return await [response as Response, responseJson];
    }
}
