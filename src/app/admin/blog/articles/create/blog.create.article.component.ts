import { Component, OnInit } from '@angular/core';
import { BlogCreateArticleForm } from './blog.create.article.form';
import * as moment from '../../../experiences/create/admin-experiences-create.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleHttpService } from '../../../../services/entities/article.http.service';
import { Article } from '../../../../entities/article';
import { FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../../../../services/notification.service';

@Component({
    selector: 'app-create',
    templateUrl: './blog.create.article.component.html',
})
export class BlogCreateArticleComponent implements OnInit {

    public articleForm = BlogCreateArticleForm;
    public isPublished = false;
    public id: number;
    public article: Article;

    constructor(private route: ActivatedRoute,
                private articleHttpService: ArticleHttpService,
                private notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            if (this.id !== null && this.id !== undefined) {
                this.articleHttpService.readOne(this.id).subscribe(article => {
                    this.article = article;
                    this.articleForm.setValue({
                        Title: this.article.Title,
                        Content: this.article.Content,
                        IsPublished: this.article.IsPublished,
                        PublishedDate: this.article.PublishedDate,
                    });
                });
            }
        });
    }

    save() {
        if (this.articleForm.valid) {
            if (this.id > 0) {
                this.articleHttpService.update(this.id, this.articleForm.getRawValue()).subscribe(() => {
                    this.notificationService.Success(
                        'Article mis à jour.',
                        'L\'ensemble des modifications ont été apportés avec succès.',
                    );
                    this.router.navigate(['/admin/blog/articles']);
                }, (error) => {
                    this.notificationService.Danger(
                        'Une erreur est survenue.',
                        'Une erreur est survenue lors de l\'enregistrement de l\'article.',
                    );
                    console.error(error);
                });
            } else {
                this.articleHttpService.create(this.articleForm.getRawValue());
            }
        } else {
            this.notificationService.Warning(
                'Formulaire incorrect',
                'Il y a une ou plusieurs erreurs dans le formulaire empêchant la sauvegarde de celui-ci.',
            );
        }
    }
}
