import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListArticleComponent } from './list-article/list-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
export const blogRoutes = [
    {
        path: '',
        component:  ListArticleComponent,
    },
    {
        path: 'article/:id',
        component: DetailArticleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(blogRoutes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {
}

