import axios, { AxiosPromise } from 'axios';

export class PetService {
    public constructor(private url: string) {}

    public getPet = (id: number): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json' },
            method: 'GET',
            url: `/v2/pet/${id}`
        });
    };
}

