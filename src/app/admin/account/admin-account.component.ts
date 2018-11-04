import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { PasswordValidator } from '../../utils/passwordValidator';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/user.service';


@Component({
    templateUrl: './admin-account.component.html',
    styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent implements OnInit {
    public accountForm = new FormGroup({
        password: new FormControl('', []),
        passwordValidation: new FormControl('', [PasswordValidator.MatchPassword]),
        Email: new FormControl('',  [Validators.email, Validators.required]),
        Firstname: new FormControl('', []),
        Lastname: new FormControl('', []),
    }, {
        validators: PasswordValidator.MatchPassword
    });

    public constructor(private http: HttpClient, private userService: UserService) { }

    public updateProfile() {
        const url = environment.api.url + environment.api.entities.users.me;
        this.http.patch(url, this.accountForm);
    }

    ngOnInit(): void {
        const user = this.userService.getUser();
        const formData = {
            password: '',
            passwordValidation: '',
            Email: user.Email,
            Firstname: user.Firstname,
            Lastname: user.Lastname
        };
        this.accountForm.setValue(formData);
    }

}
