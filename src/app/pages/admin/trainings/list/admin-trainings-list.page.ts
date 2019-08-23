import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ComponentsModule } from '../../../../modules/components.module';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { AdminTrainingListComponent } from './admin-training-list.component';

const routes: Routes = [
    { path: '', component: AdminTrainingListComponent },
];


@NgModule({
    declarations: [
        AdminTrainingListComponent,
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
export class AdminTrainingsListPage {
}
