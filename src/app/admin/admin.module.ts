import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AdminAuthgard } from './admin.authgard';
import { MyMaterialModule } from '../my-material/my-material.module';
import { AdminLoginService } from './login/admin-login.service';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminExperiencesCreateComponent } from './experiences/create/admin-experiences-create.component';
import { AdminTrainingListComponent } from './trainngs/list/admin-training-list.component';
import { AdminExperiencesListComponent } from './experiences/list/admin-experiences-list.component';
import { AdminHomeComponent } from './home/admin-home.component';
import { AdminTrainingCreateComponent } from './trainngs/create/admin-training-create.component';
import { AdminSkillsCreateComponent } from './skills/create/admin-skills-create.component';
import { AdminAccountComponent } from './account/admin-account.component';
import { AdminSkillsListComponent } from './skills/list/admin-skills-list.component';
import { AdminSkillsService } from './skills/admin-skills.service';
import { AdminTrainingsService } from './trainngs/admin-trainings.service';
import { AdminExperiencesService } from './experiences/admin-experiences.service';
import { AdminRoutingModule } from './admin.routes';
import { AdminLayoutComponent } from './layout/admin.layout.component';


@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        AdminLayoutComponent,
        AdminHomeComponent,
        AdminLoginComponent,
        AdminAccountComponent,
        AdminTrainingListComponent,
        AdminTrainingCreateComponent,
        AdminExperiencesListComponent,
        AdminExperiencesCreateComponent,
        AdminSkillsListComponent,
        AdminSkillsCreateComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MyMaterialModule,
    ],
    providers: [
        AdminAuthgard,
        AdminLoginService,
        AdminSkillsService,
        AdminExperiencesService,
        AdminTrainingsService,
    ],
})
export class AdminModule {

}
