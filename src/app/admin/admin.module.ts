import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AdminAuthgard } from './admin.authgard';
import { MyMaterialModule } from '../my-material/my-material.module';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminExperiencesCreateComponent } from './experiences/create/admin-experiences-create.component';
import { AdminTrainingListComponent } from './trainngs/list/admin-training-list.component';
import { AdminExperiencesListComponent } from './experiences/list/admin-experiences-list.component';
import { AdminHomeComponent } from './home/admin-home.component';
import { AdminTrainingCreateComponent } from './trainngs/create/admin-training-create.component';
import { AdminSkillsCreateComponent } from './skills/create/admin-skills-create.component';
import { AdminAccountComponent } from './account/admin-account.component';
import { AdminSkillsListComponent } from './skills/list/admin-skills-list.component';
import { AdminRoutingModule } from './admin.routes';
import { AdminLayoutComponent } from './layout/admin.layout.component';
import { CustomHttpHandlerService } from '../services/errors/custom.http.handler.service';
import { QuillModule } from 'ngx-quill';
import { BlogListArticleComponent } from './blog/articles/list/blog.list.article.component';
import { BlogCreateArticleComponent } from './blog/articles/create/blog.create.article.component';
import { MomentjsPipe } from '../pipes/momentjs.pipe';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
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
        BlogListArticleComponent,
        BlogCreateArticleComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MyMaterialModule,
        QuillModule,
        PipesModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpHandlerService,
            multi: true,
        },
        AdminAuthgard
    ],
})
export class AdminModule {

}
