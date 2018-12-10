import { User } from '../entities/user';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class UserService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    }

    public getUser(): User {
        if (isPlatformBrowser(this.platformId)) {
            const storedUser = localStorage.getItem('user');
            if (storedUser != null) {
                return new User(JSON.parse(storedUser));
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public setUser(value: User) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('user', JSON.stringify(value));
        }
    }
}
