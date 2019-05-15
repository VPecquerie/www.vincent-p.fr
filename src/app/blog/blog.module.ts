import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticleComponent } from './list-article/list-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

@NgModule({
  declarations: [ListArticleComponent, DetailArticleComponent ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
