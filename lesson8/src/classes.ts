import {User, ApiResponse} from './interface';

export class UserInfo{
    public fullName: string;
    public country: string;
    public age: number;
    public email: string;
    private _phone: number;

    public get phone(): number {
        return this._phone;
    }
    public set phone(phone){
        this._phone = phone;
    }

    public constructor(user: User, phone: number) {
        this.fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        this.country = user.location.country;
        this.age = user.dob.age;
        this.email = user.email;
        this._phone = phone;
    }

}

export function transformUsers(apiResponse: ApiResponse): UserInfo[] {
    return apiResponse.results.map(user => new UserInfo(user, 9219238));
}
