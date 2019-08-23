import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../../modules/components.module';
import { ErrorsNotFoundComponent } from './errors-not-found.component';

const routes: Routes = [
    { path: '', component: ErrorsNotFoundComponent },
];

@NgModule({
    declarations: [
        ErrorsNotFoundComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(routes),
    ],
})
export class ErrorsNotFoundPage {
}
