import { IApiService } from 'src/interfaces/api-service';

export class FetchApiService implements IApiService {
    public constructor(private baseUrl: string) {}

    public async get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = {
            ...{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            ...headers
        };

        const queries = params ? `?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}` : '';
        return fetch(`${this.baseUrl}${uri}${queries}`, {
            method: 'GET',
            headers: defaultHeaders
        });
    }
}
