import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleHttpService } from '../../../services/entities/article.http.service';
import { AbstractComponent } from '../../../components/abstract.component';
import { Article } from '../../../models/entities/article';

@Component({
    selector: 'app-blog-detail-article',
    templateUrl: './blog-detail-article.component.html',
    styleUrls: ['./blog-detail-article.component.scss']
})
export class BlogDetailArticleComponent extends AbstractComponent implements OnInit {

    private article: Article;
    constructor(private route: ActivatedRoute, private httpService: ArticleHttpService) {
        super();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id !== null && params.id !== undefined) {
                this.subscriptions.push(
                    this.httpService
                        .readOne(params.id)
                        .subscribe(article => this.article = article)
                );
            }
        });
    }

}
