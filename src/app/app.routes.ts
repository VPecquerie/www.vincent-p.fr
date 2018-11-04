import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthgard } from './admin/admin.authgard';
import { AdminComponent } from './admin/admin.component';
import { adminRoutes } from './admin/admin.routes';
import { AdminLoginComponent } from './admin/login/admin-login.component';

export const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'admin', children: adminRoutes, component: AdminComponent, canActivate: [AdminAuthgard] },
    { path: 'login', component: AdminLoginComponent },
    { path: '**', component: HomeComponent }
];
