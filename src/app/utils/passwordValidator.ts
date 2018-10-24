import { FormGroup } from '@angular/forms';
import * as zxcvbn from 'zxcvbn';

export class PasswordValidator {
    static MatchPassword(passwordFormSubGroup: FormGroup) {
        const passwordField = passwordFormSubGroup.get('password');
        const confirmationField = passwordFormSubGroup.get(
            'passwordValidation'
        );
        if (passwordField != null && confirmationField != null) {
            if (passwordField.value !== '') {
                if (PasswordValidator.isEnoughSecure(passwordField.value)) {
                    return { Weak: true };
                }
                if (passwordField.value !== confirmationField.value) {
                    return { Mismatch: true };
                }
            }
        }
        return null;
    }

    private static isEnoughSecure(value: any) {
        const securityCheck = zxcvbn(value);
        return securityCheck.score < 3; // @TODO: Store this constant somewhere else.
    }
}
