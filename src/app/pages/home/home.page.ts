import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../modules/components.module';

const routes: Routes = [
    { path: '', component: HomeComponent },
];


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(routes),
    ],
})
export class HomePage {
}
