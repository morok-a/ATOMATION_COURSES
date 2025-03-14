import * as dotenv from 'dotenv';
dotenv.config();
import { AuthConfigDto, ConfigDto, ApiConfigDto } from '../dto/config.dto';
import * as fs from 'fs';

export class ConfigService {
    private _token: string;

    public constructor() {
        dotenv.config();
        this._token = '';
    }

    public getConfig(): ConfigDto {
        const authConfig = this.getAuthConfig();
        const apiConfig = this.getApiConfig();

        return {
            auth: authConfig,
            api: apiConfig
        };
    }

    private getAuthConfig(): AuthConfigDto {
        if (fs.existsSync('token.txt')) {
            this._token = fs.readFileSync('token.txt', 'utf8');
        }

        return {
            theJokesApi: {
                apiKey: process.env.THE_JOKES_API_KEY ? process.env.THE_JOKES_API_KEY : ''
            }
        };
    }

    private getApiConfig(): ApiConfigDto {
        return {
            theJokesApi: {
                baseUrl: 'https://official-joke-api.appspot.com'
            }
        };
    }

    public updateJwtToken(token: string): void {
        fs.writeFileSync('token.txt', token);
    }
}
