import { UserService } from '../services/user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthgard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate() {
        const user = this.userService.getUser();
        if (!user) {
            this.router.navigate(['/admin/login']);
            return false;
        } else if (user.Token.hasExpired()) {
            this.router.navigate(['/admin/login']);
            return false;
        } else {
            return true;
        }
    }

}
