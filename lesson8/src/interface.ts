export interface User{
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateInfo;
    registered: DateInfo;
    phone: number;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
}
export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

interface Name {
    title: string;
    first: string;
    last: string;
}

interface Street{
    number: number;
    name: string;
}

interface Location{
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: TimeZone;
}

interface Coordinates{
    latitude: string;
    longitude: string;
}

interface TimeZone{
    offset: string;
    description: string;
}

interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface DateInfo {
    date: string;
    age: number;
}

interface ID {
    name: string;
    value: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface ApiResponse {
    results: User[];
    info: Info;
}

export async function getFile(): Promise<ApiResponse>{
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json() as ApiResponse;
    return json;
}
