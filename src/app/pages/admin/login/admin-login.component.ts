import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../../../models/forms/login.form';
import { UserService } from '../../../services/user.service';
import { UserHttpService } from '../../../services/entities/user.http.service';
import { NotificationService } from '../../../services/notification.service';
import { SeoService } from '../../../services/seo.service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {

    public loginForm = LoginForm;

    public constructor(private userService: UserService,
                       private userHttpService: UserHttpService,
                       private router: Router,
                       private notificationService: NotificationService,
                       private seoService: SeoService) {
        this.seoService.prependPageTitle('Connexion à l\'administration');
    }

    ngOnInit(): void {
        const user = this.userService.getUser();
        if (user != null) {
            if (user.Token.hasExpired()) {
                this.notificationService.Warning(
                    'Session expirée !',
                    'Votre session a expirée, merci de vous reconnecter!',
                );
            } else {
                this.router.navigate(['/admin/dashboard']);
            }
        }
    }

    login() {
        if (this.loginForm.valid) {
            this.userHttpService.login(this.loginForm.value).subscribe((user) => {
                this.userService.setUser(user);
                this.router.navigate(['/admin/dashboard']);
            }, (error) => {
                this.notificationService.Danger(
                    'Connexion Impossible',
                    'Vos identifiants sont incorrect ou le serveur d\'authentification est injoignable.',
                );
                this.router.navigate(['/admin/login']);
            });
        }
        return false;
    }


}
