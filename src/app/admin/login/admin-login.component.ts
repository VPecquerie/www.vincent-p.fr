import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../entities/user';
import { AdminLoginService } from './admin-login.service';
import { NotificationService } from '../../services/notification.service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {

    public loginForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        rememberMe: new FormControl(),
    });

    public constructor(private userService: UserService,
                       private service: AdminLoginService,
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
            this.service.login(this.loginForm.value).then((result) => {
                const user = new User(result);
                this.userService.setUser(user);
                this.router.navigate(['/admin']);
            }).catch((error) => {
                console.error(error);
            });
        }
    }


}
