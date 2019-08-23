import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleForm, DefaultArticleForm } from '../../../../../models/forms/article.form';
import { Article } from '../../../../../models/entities/article';
import { ArticleHttpService } from '../../../../../services/entities/article.http.service';
import { NotificationService } from '../../../../../services/notification.service';
import { SeoService } from '../../../../../services/seo.service';

@Component({
    templateUrl: './admin-blog-articles-create.component.html',
})
export class AdminBlogArticlesCreateComponent implements OnInit {

    public articleForm = ArticleForm;
    public id: number;
    public article: Article;
    public isPublished = false;

    constructor(private route: ActivatedRoute,
                private articleHttpService: ArticleHttpService,
                private notificationService: NotificationService,
                private router: Router,
                private seoService: SeoService) {
        this.seoService.prependPageTitle('Rédaction d\'un article - Blog');
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

                    this.articleForm.reset(DefaultArticleForm);
                    this.router.navigate(['/admin/blog/articles']);
                }, (error) => {
                    this.notificationService.Danger(
                        'Une erreur est survenue.',
                        'Une erreur est survenue lors de l\'enregistrement de l\'article.',
                    );

                    console.error(error);
                });
            } else {
                this.articleHttpService.create(this.articleForm.getRawValue()).subscribe(() => {
                    this.notificationService.Success(
                        'Article créé.',
                        'L\'ensemble des modifications ont été apportés avec succès.',
                    );

                    this.articleForm.reset(DefaultArticleForm);
                    this.router.navigate(['/admin/blog/articles']);
                }, (error) => {
                    this.notificationService.Danger(
                        'Une erreur est survenue.',
                        'Une erreur est survenue lors de l\'enregistrement de l\'article.',
                    );

                    console.error(error);
                });
            }
        } else {
            this.notificationService.Warning(
                'Formulaire incorrect',
                'Il y a une ou plusieurs erreurs dans le formulaire empêchant la sauvegarde de celui-ci.',
            );
        }
    }
}
