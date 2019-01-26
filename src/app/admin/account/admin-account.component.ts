import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { AdminAccountForm } from './admin-account.from-group.component';
import { UserHttpService } from '../../services/entities/user.http.service';

@Component({
    templateUrl: './admin-account.component.html',
    styleUrls: ['./admin-account.component.scss'],
})
export class AdminAccountComponent implements OnInit {
    public accountForm = AdminAccountForm;

    public constructor(private http: HttpClient, private userService: UserService, private userHttpService: UserHttpService) { }

    public updateProfile() {
        this.userHttpService.update('me', this.accountForm.getRawValue());
    }

    ngOnInit(): void {
        const user = this.userService.getUser();
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
