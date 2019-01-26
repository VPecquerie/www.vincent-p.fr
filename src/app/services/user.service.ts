import { User } from '../entities/user';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Deserialize } from 'cerialize';
@Injectable()
export class UserService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    }

    public getUser(): User {
        if (isPlatformBrowser(this.platformId)) {
            const storedUser = localStorage.getItem('user');
            if (storedUser != null) {
                return Deserialize(JSON.parse(storedUser), User);
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
