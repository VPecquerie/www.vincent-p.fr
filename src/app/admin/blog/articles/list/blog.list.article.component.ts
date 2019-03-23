import { Component, OnInit } from '@angular/core';
import { Article } from '../../../../entities/article';
import { ArticleHttpService } from '../../../../services/entities/article.http.service';

@Component({
  selector: 'app-blog-list-article',
  templateUrl: './blog.list.article.component.html',
  styleUrls: ['./blog.list.article.component.scss']
})
export class BlogListArticleComponent implements OnInit {
    private articles: Article[];

  constructor(private service: ArticleHttpService) { }

  ngOnInit() {
      this.service.readAll().subscribe(articles => {
          return this.articles = articles;
      });
  }

    delete(article: Article) {
        
    }
}
