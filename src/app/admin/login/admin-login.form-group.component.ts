import { FormControl, FormGroup, Validators } from '@angular/forms';

export const AdminLoginFormGroupComponent = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(),
});
