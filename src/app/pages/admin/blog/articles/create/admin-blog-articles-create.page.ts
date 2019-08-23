import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogArticlesCreateComponent } from './admin-blog-articles-create.component';
import { ComponentsModule } from '../../../../../modules/components.module';
import { MyMaterialModule } from '../../../../../modules/my-material.module';
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
    { path: '', component: AdminBlogArticlesCreateComponent },
    { path: ':id', component: AdminBlogArticlesCreateComponent }
];


@NgModule({
    declarations: [
        AdminBlogArticlesCreateComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        MyMaterialModule,
        QuillModule,
        RouterModule.forChild(routes),
    ],
})
export class AdminBlogArticlesCreatePage {
}
