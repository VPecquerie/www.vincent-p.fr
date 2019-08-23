import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../../modules/components.module';
import { BlogListArticlesComponent } from './blog-list-articles.component';

const routes: Routes = [
    { path: '', component: BlogListArticlesComponent },
    { path: 'pages/:page', component: BlogListArticlesComponent },
];

@NgModule({
    declarations: [
        BlogListArticlesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(routes),

    ],
})
export class BlogListArticlesPage {
}
