import { FormControl, FormGroup, Validators } from '@angular/forms';

export const DefaultTrainingFormValues = {
    Title: '',
    Description: '',
    Begin: '',
    End: ''
};

export const TrainingForm = new FormGroup({
    Title: new FormControl(DefaultTrainingFormValues.Title, [Validators.required]),
    Description: new FormControl(DefaultTrainingFormValues.Description, [Validators.required]),
    Begin: new FormControl(DefaultTrainingFormValues.Begin, [Validators.required]),
    End: new FormControl(DefaultTrainingFormValues.End, [])
});
