import { FormControl, FormGroup, Validators } from '@angular/forms';

export const DefaultArticleForm = {
    Title: '',
    Content: '',
    IsPublished: false,
    PusblishedDate: null
};

export const ArticleForm = new FormGroup({
    Title: new FormControl(DefaultArticleForm.Title, [Validators.required]),
    Content: new FormControl(DefaultArticleForm.Content, [Validators.required]),
    IsPublished: new FormControl(DefaultArticleForm.IsPublished, []),
    PublishedDate: new FormControl(DefaultArticleForm.PusblishedDate, [])
});
