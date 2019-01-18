import { FormGroup } from '@angular/forms';

export class PasswordValidator {
    static MatchPassword(passwordFormSubGroup: FormGroup) {
        const passwordField = passwordFormSubGroup.get('password');
        const confirmationField = passwordFormSubGroup.get(
            'passwordValidation',
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
        return this.scorePassword(value) >= 30;
    }

    private static scorePassword(password: string): number {
        let score = 0;
        if (!password) {
            return score;
        }
        // award every unique letter until 5 repetitions
        const letters = {};
        for (let i = 0; i < password.length; i++) {
            letters[password[i]] = (letters[password[i]] || 0) + 1;
            score += 5.0 / letters[password[i]];
        }

        // bonus points for mixing it up
        const variations = {
            digits: /\d/.test(password),
            lower: /[a-z]/.test(password),
            upper: /[A-Z]/.test(password),
            nonWords: /\W/.test(password),
        };

        let variationCount = 0;
        for (const check in variations) {
            if (variations.hasOwnProperty(check)) {
                variationCount += (variations[check] === true) ? 1 : 0;
            }
        }
        score += (variationCount - 1) * 10;
        return score;
    }
}
