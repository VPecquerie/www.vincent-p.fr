import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../../modules/components.module';
import { BlogDetailArticleComponent } from './blog-detail-article.component';

const routes: Routes = [
    { path: ':id', component: BlogDetailArticleComponent },
];

@NgModule({
    declarations: [
        BlogDetailArticleComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(routes),

    ],
})
export class BlogDetailArticlePage {
}
