import {User} from '../entities/user';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    public getUser(): User {
        const storedUser = localStorage.getItem('user');
        if (storedUser != null) {
            return new User(JSON.parse(storedUser));
        } else {
            return null;
        }
    }
    public setUser(value: User) {
        localStorage.setItem('user', JSON.stringify(value));
    }
}
