import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { AdminSkillsCreateComponent } from './admin-skills-create.component';
import { ComponentsModule } from '../../../../modules/components.module';
import { MyMaterialModule } from '../../../../modules/my-material.module';

const routes: Routes = [
    { path: '', component: AdminSkillsCreateComponent },
    { path: ':id', component: AdminSkillsCreateComponent },
];


@NgModule({
    declarations: [
        AdminSkillsCreateComponent
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
export class AdminSkillsCreatePage {
}
