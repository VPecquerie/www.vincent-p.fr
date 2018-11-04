import { AdminHomeComponent } from './home/admin-home.component';
import { AdminSkillsCreateComponent } from './skills/create/admin-skills-create.component';
import { AdminExperiencesCreateComponent } from './experiences/create/admin-experiences-create.component';
import { AdminTrainingListComponent } from './trainngs/list/admin-training-list.component';
import { AdminExperiencesListComponent } from './experiences/list/admin-experiences-list.component';
import { AdminTrainingCreateComponent } from './trainngs/create/admin-training-create.component';
import { AdminAccountComponent } from './account/admin-account.component';
import { AdminSkillsListComponent } from './skills/list/admin-skills-list.component';

export const adminRoutes = [
    { path: 'home', title: 'Dashboard', icon: 'dashboard', class: '', component: AdminHomeComponent },
    { path: 'account', title: 'Mon Compte', icon: 'person', class: '', component: AdminAccountComponent },
    { path: 'trainings', title: 'Formations', icon: 'school', class: '', component: AdminTrainingListComponent },
    { path: 'trainings/create', title: 'Formations', component: AdminTrainingCreateComponent },
    { path: 'experiences', title: 'Experiences', icon: 'work', class: '', component: AdminExperiencesListComponent },
    { path: 'experiences/create', title: 'Experiences', component: AdminExperiencesCreateComponent },
    { path: 'skills', title: 'Compétences', icon: 'timeline', class: '', component: AdminSkillsListComponent },
    { path: 'skills/create', title: 'Compétences', component: AdminSkillsCreateComponent },
    { path: '**', redirectTo: '/admin/home', pathMatch: 'full' }
];
