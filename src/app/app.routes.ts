import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

