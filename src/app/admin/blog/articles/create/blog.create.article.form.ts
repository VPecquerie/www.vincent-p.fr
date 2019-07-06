import { FormControl, FormGroup, Validators } from '@angular/forms';

export const BlogCreateArticleFormDefaultValues = {
    Title: '',
    Content: '',
    IsPublished: false,
    PusblishedDate: null
};

export const BlogCreateArticleForm = new FormGroup({
    Title: new FormControl(BlogCreateArticleFormDefaultValues.Title, [Validators.required]),
    Content: new FormControl(BlogCreateArticleFormDefaultValues.Content, [Validators.required]),
    IsPublished: new FormControl(BlogCreateArticleFormDefaultValues.IsPublished, []),
    PublishedDate: new FormControl(BlogCreateArticleFormDefaultValues.PusblishedDate, [])
});
