import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../../../entities/article';
import { ArticleHttpService } from '../../../../services/entities/article.http.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-blog-list-article',
    templateUrl: './blog.list.article.component.html',
})
export class BlogListArticleComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public articles: Article[];

    constructor(private service: ArticleHttpService,
                private router: Router) {
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
        const self = this;
        this.service.delete(article.ArticleId).subscribe(() => {
            const index = _.indexOf(this.articles, article);
            self.articles.splice(index, 1);
            self.router.navigate(['/admin/blog/articles']);
        });
    }
}
