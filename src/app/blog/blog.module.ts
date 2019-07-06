import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticleComponent } from './list-article/list-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { BlogRoutingModule } from './blog.routes';

@NgModule({
    declarations: [ListArticleComponent, DetailArticleComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
    ],
})
export class BlogModule {
}
