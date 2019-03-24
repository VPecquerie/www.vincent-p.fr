import { Component, OnInit } from '@angular/core';
import { Article } from '../../../../entities/article';
import { ArticleHttpService } from '../../../../services/entities/article.http.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list-article',
  templateUrl: './blog.list.article.component.html',
  styleUrls: ['./blog.list.article.component.scss']
})
export class BlogListArticleComponent implements OnInit {
    public articles: Article[];

  constructor(private service: ArticleHttpService,
              private router: Router) { }

  ngOnInit() {
      this.service.readAll().subscribe(articles => {
          console.log(articles);
          return this.articles = articles;
      });
  }

    delete(article: Article) {
      const self = this;
        this.service.delete(article.ArticleId).subscribe(() => {
            const index = _.indexOf(this.articles, article);
            self.articles.splice(index, 1);
            self.router.navigate(['/admin/experiences']);
        });
    }
}
