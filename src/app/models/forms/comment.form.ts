import { FormControl, FormGroup, Validators } from '@angular/forms';

export const DefaultCommentForm = {
    Title: '',
    Comment: '',
    CreatorName: '',
    CreatorEmail: ''
};

export const CommentForm = new FormGroup({
    Title: new FormControl(DefaultCommentForm.Title, [Validators.required]),
    Comment: new FormControl(DefaultCommentForm.Comment, [Validators.required]),
    CreatorName: new FormControl(DefaultCommentForm.CreatorName, [Validators.required]),
    CreatorEmail: new FormControl(DefaultCommentForm.CreatorEmail, [Validators.required]),
});
