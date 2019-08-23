import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ComponentsModule } from '../../../../modules/components.module';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { AdminTrainingCreateComponent } from './admin-training-create.component';

const routes: Routes = [
    { path: '', component: AdminTrainingCreateComponent },
    { path: ':id', component: AdminTrainingCreateComponent },
];


@NgModule({
    declarations: [
        AdminTrainingCreateComponent,
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
export class AdminTrainingsCreatePage {
}
