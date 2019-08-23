import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogArticlesListComponent } from './admin-blog-articles-list.component';
import { ComponentsModule } from '../../../../../modules/components.module';

const routes: Routes = [
    { path: '', component: AdminBlogArticlesListComponent },
];


@NgModule({
    declarations: [
        AdminBlogArticlesListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(routes),
    ],
})
export class AdminBlogArticlesListPage {
}
