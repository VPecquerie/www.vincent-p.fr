import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../utils/passwordValidator';

export const AdminAccountForm = new FormGroup({
    password: new FormControl('', []),
    passwordValidation: new FormControl('', [PasswordValidator.MatchPassword]),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Firstname: new FormControl('', []),
    Lastname: new FormControl('', []),
}, {
    validators: PasswordValidator.MatchPassword,
});
