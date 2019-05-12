import { FormControl, FormGroup, Validators } from '@angular/forms';
export const BlogCreateArticleForm = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Content: new FormControl('', [Validators.required]),
    IsPublished: new FormControl(false, []),
    PublishedDate: new FormControl(null, [])
});
