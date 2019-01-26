import { FormControl, FormGroup, Validators } from '@angular/forms';

export const SkillForm = new FormGroup({
    group: new FormControl('', []),
    name: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    groupAdd: new FormGroup({
        Name: new FormControl('', []),
        Icon: new FormControl('', []),
    }),
});
