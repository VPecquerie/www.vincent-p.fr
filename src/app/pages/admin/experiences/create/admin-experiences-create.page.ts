import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { AdminExperiencesCreateComponent } from './admin-experiences-create.component';
import { ComponentsModule } from '../../../../modules/components.module';
import { MyMaterialModule } from '../../../../modules/my-material.module';

const routes: Routes = [
    { path: '', component: AdminExperiencesCreateComponent },
    { path: ':id', component: AdminExperiencesCreateComponent },
];


@NgModule({
    declarations: [
        AdminExperiencesCreateComponent,
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
export class AdminExperiencesCreatePage {
}
