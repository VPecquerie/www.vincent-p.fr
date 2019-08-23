import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountComponent } from './admin-account.component';
import { ComponentsModule } from '../../../modules/components.module';
import { MyMaterialModule } from '../../../modules/my-material.module';

const routes: Routes = [
    { path: '', component: AdminAccountComponent },
];

@NgModule({
    declarations: [
        AdminAccountComponent,
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
export class AdminAccountPage {
}
