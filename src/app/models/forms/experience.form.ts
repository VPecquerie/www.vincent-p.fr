import { FormControl, FormGroup, Validators } from '@angular/forms';

export const ExperienceForm = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Start: new FormControl('', [Validators.required]),
    End: new FormControl('', []),
    CompanyId: new FormControl(''),
    CompanyAdd: new FormGroup({
        Name: new FormControl('', []),
        Location: new FormControl('', []),
        Logo: new FormControl('', []),
    }),
});
