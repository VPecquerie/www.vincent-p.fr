import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../models/entities/article';
import { ArticleHttpService } from '../../../services/entities/article.http.service';

@Component({
    templateUrl: './blog-list-articles.component.html',
    styleUrls: ['./blog-list-articles.component.scss'],
})
export class BlogListArticlesComponent implements OnInit, OnDestroy {

    articles: Article[] = [];
    page = 1;
    pageSize = 5;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private articleService: ArticleHttpService) {
    }

    ngOnInit() {
        this.articleService.readAll().subscribe((articles) => this.articles = articles);
        this.subscription = this.route.params.subscribe(params => {
            if (params['page'] != null) {
                this.page = +params['page']; // (+) converts string 'id' to a number
            }
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
