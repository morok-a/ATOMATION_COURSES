export interface ConfigDto {
    api: ApiConfigDto;
}

export interface ApiConfigDto {
    theJokesApi: TheJokesApiConfigDto;
}

export interface TheJokesApiConfigDto {
    baseUrl: string;
}
