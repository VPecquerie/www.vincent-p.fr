import { Component, OnInit } from '@angular/core';
import { BlogCreateArticleForm } from './blog.create.article.form';

@Component({
  selector: 'app-create',
  templateUrl: './blog.create.article.component.html',
  styleUrls: ['./blog.create.article.component.scss']
})
export class BlogCreateArticleComponent implements OnInit {
    articleForm = BlogCreateArticleForm;
    isPublished = false;

  constructor() { }

  ngOnInit() {
  }

}
