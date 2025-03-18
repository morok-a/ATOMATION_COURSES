import { ConfigDto, ApiConfigDto } from '../dto/config.dto';

export class ConfigService {
    public getConfig(): ConfigDto {
        const apiConfig = this.getApiConfig();
        return {
            api: apiConfig
        } as ConfigDto;
    }

    private getApiConfig(): ApiConfigDto {
        return {
            theJokesApi: {
                baseUrl: 'https://official-joke-api.appspot.com'
            }
        };
    }
}
