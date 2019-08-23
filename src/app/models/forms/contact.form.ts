import { FormControl, FormGroup, Validators } from '@angular/forms';

export const ContactForm =  new FormGroup({
    Message: new FormControl('', [Validators.required]),
    Mail:  new FormControl('', [Validators.required, Validators.email]),
    Name:  new FormControl('', [Validators.required]),
    Phone: new FormControl('', [])
});
