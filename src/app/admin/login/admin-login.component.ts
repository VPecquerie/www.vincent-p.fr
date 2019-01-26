import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { AdminLoginFormGroupComponent } from './admin-login.form-group.component';
import { UserHttpService } from '../../services/entities/user.http.service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {

    public loginForm = AdminLoginFormGroupComponent;

    public constructor(private userService: UserService,
                       private userHttpService: UserHttpService,
                       private router: Router,
                       private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        const user = this.userService.getUser();
        if (user != null) {
            if (user.Token.hasExpired()) {
                this.notificationService.Warning('Session expirée !', 'Votre session a expirée, merci de vous reconnecter!');
            } else {
                this.router.navigate(['/admin']);
            }
        }
    }

    login() {
        if (this.loginForm.valid) {
            this.userHttpService.login(this.loginForm.value).subscribe((user) => {
                this.userService.setUser(user);
                this.router.navigate(['/admin']);
            });
        }
    }


}
