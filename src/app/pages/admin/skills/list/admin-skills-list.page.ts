import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ComponentsModule } from '../../../../modules/components.module';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { AdminSkillsListComponent } from './admin-skills-list.component';

const routes: Routes = [
    { path: '', component: AdminSkillsListComponent },
];


@NgModule({
    declarations: [
        AdminSkillsListComponent,
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
export class AdminSkillsListPage {
}
