export interface IApiService {
    get(url: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response>;
}
