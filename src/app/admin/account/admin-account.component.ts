import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AdminAccountForm } from './admin-account.from-group.component';
import { UserHttpService } from '../../services/entities/user.http.service';
import { SeoService } from '../../services/seo.service';

@Component({
    templateUrl: './admin-account.component.html'
})
export class AdminAccountComponent implements OnInit {
    public accountForm = AdminAccountForm;

    public constructor(private userService: UserService,
                       private userHttpService: UserHttpService,
                       private seoService: SeoService) {
        this.seoService.prependPageTitle('Mon Profil - Administration');
    }

    public updateProfile() {
        this.userHttpService.update('me', this.accountForm.getRawValue());
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
