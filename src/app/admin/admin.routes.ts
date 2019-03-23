import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminHomeComponent } from './home/admin-home.component';
import { AdminSkillsCreateComponent } from './skills/create/admin-skills-create.component';
import { AdminExperiencesCreateComponent } from './experiences/create/admin-experiences-create.component';
import { AdminTrainingListComponent } from './trainngs/list/admin-training-list.component';
import { AdminExperiencesListComponent } from './experiences/list/admin-experiences-list.component';
import { AdminTrainingCreateComponent } from './trainngs/create/admin-training-create.component';
import { AdminAccountComponent } from './account/admin-account.component';
import { AdminSkillsListComponent } from './skills/list/admin-skills-list.component';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminAuthgard } from './admin.authgard';
import { BlogListArticleComponent } from './blog/articles/list/blog.list.article.component';
import { BlogCreateArticleComponent } from './blog/articles/create/blog.create.article.component';

export const adminRoutes = [
    {
        path: 'login',
        component: AdminLoginComponent,
    },
    {
        path: 'home',
        title: 'Dashboard',
        icon: 'dashboard',
        class: '',
        component: AdminHomeComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'account',
        title: 'Mon Compte',
        icon: 'person',
        class: '',
        component: AdminAccountComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'trainings',
        title: 'Formations',
        icon: 'school',
        class: '',
        component: AdminTrainingListComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'trainings/edit',
        title: 'Formations',
        component: AdminTrainingCreateComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'trainings/edit/:id',
        title: 'Formations',
        component: AdminTrainingCreateComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'experiences',
        title: 'Experiences',
        icon: 'work',
        class: '',
        component: AdminExperiencesListComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'experiences/edit',
        title: 'Experiences',
        component: AdminExperiencesCreateComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'experiences/edit/:id',
        title: 'Experiences',
        component: AdminExperiencesCreateComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'skills',
        title: 'Compétences',
        icon: 'timeline',
        class: '',
        component: AdminSkillsListComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'blog/articles/create',
        title: 'Blog',
        component: BlogCreateArticleComponent,
        canActivate: [AdminAuthgard],
    },    {
        path: 'blog/articles',
        title: 'Blog',
        icon: 'article',
        class: '',
        component: BlogListArticleComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: 'skills/create',
        title: 'Compétences',
        component: AdminSkillsCreateComponent,
        canActivate: [AdminAuthgard],
    },
    {
        path: '**',
        redirectTo: '/admin/home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
}

