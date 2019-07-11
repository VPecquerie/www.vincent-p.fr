import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../../../entities/article';
import { ArticleHttpService } from '../../../../services/entities/article.http.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../../services/notification.service';

@Component({
    selector: 'app-blog-list-article',
    templateUrl: './blog.list.article.component.html',
})
export class BlogListArticleComponent implements OnInit, OnDestroy {
    public articles: Article[];
    private subscription: Subscription;

    constructor(private service: ArticleHttpService,
                private router: Router,
                private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.subscription = this.service.readAll(true).subscribe(articles => {
            return this.articles = articles as Article[];
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    delete(article: Article) {
        event.preventDefault();
        this.service.delete(article.ArticleId).subscribe(() => {
            const index = _.indexOf(this.articles, article);
            this.articles.splice(index, 1);
            this.notificationService.Success('Article Supprimé.', 'L\'article a bien été supprimé.');
        }, (error) => {
            console.error(error);
            this.notificationService.Danger(
                'Une erreur est survenue.',
                'Une erreur est suvenue durant la suppresion de l\'article.',
            );
        });

        return false;
    }
}
