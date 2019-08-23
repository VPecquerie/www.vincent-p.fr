import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserHttpService } from '../../../services/entities/user.http.service';
import { SeoService } from '../../../services/seo.service';
import { NotificationService } from '../../../services/notification.service';
import { AccountForm } from '../../../models/forms/account.form';

@Component({
    templateUrl: './admin-account.component.html'
})
export class AdminAccountComponent implements OnInit {
    public accountForm = AccountForm;

    public constructor(private userService: UserService,
                       private userHttpService: UserHttpService,
                       private seoService: SeoService,
                       private notificationService: NotificationService) {
        this.seoService.prependPageTitle('Mon Profil - Administration');
    }

    public updateProfile() {
        if (this.accountForm.valid) {
            this.userHttpService.update('me', this.accountForm.getRawValue());
        } else {
            this.notificationService.Warning('Formulaire Invalide', 'Le contenu du formulaire n\'est pas valide.');
        }
    }

    ngOnInit(): void {
        const user = this.userService.getUser();
        if (user) {
            const formData = {
                password: '',
                passwordValidation: '',
                Email: user.Email,
                Firstname: user.Firstname,
                Lastname: user.Lastname,
            };
            this.accountForm.setValue(formData);
        }
    }
}
