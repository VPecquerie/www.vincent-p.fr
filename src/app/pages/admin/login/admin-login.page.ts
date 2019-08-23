import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../../modules/components.module';
import { AdminLoginComponent } from './admin-login.component';
import { MyMaterialModule } from '../../../modules/my-material.module';

const routes: Routes = [
    { path: '', component: AdminLoginComponent },
];

@NgModule({
    declarations: [
        AdminLoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        MyMaterialModule,
        RouterModule.forChild(routes),
    ],
})
export class AdminLoginPage {
}
