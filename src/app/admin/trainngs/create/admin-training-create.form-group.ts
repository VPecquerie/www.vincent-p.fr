import { FormControl, FormGroup, Validators } from '@angular/forms';

export const TrainingForm = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Begin: new FormControl('', [Validators.required]),
    End: new FormControl('', [])
});
