export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theJokesApi: TheJokesApiAuthConfigDto;
}

export interface TheJokesApiAuthConfigDto {
    apiKey: string;
}

export interface ApiConfigDto {
    theJokesApi: TheJokesApiConfigDto;
}

export interface TheJokesApiConfigDto {
    baseUrl: string;
}
