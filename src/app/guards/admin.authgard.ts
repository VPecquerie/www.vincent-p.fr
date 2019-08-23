import { UserService } from '../services/user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class AdminAuthgard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router,
                private notificationService: NotificationService) {
    }

    canActivate() {
        const user = this.userService.getUser();
        if (!user) {

            this.notificationService.Warning(
                'Accès restreint !',
                'Cette page est restreinte aux utilisateurs authentifé. Merci de vous authentifier pour accéder à son contenu.'
            );

            this.router.navigate(['/admin/login']);
            return false;
        } else if (user.Token.hasExpired()) {
            this.notificationService.Warning(
                'Votre session a expiré !',
                'Votre session a expiré. Merci de saisir à nouveau vos identifiants de connexion.'
            );
            this.router.navigate(['/admin/login']);
            return false;
        } else {
            return true;
        }
    }

}
