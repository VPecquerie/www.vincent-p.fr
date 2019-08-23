import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeAboutComponent } from '../components/home/about/home-about.component';
import { HomeCookieComponent } from '../components/home/cookie/home-cookie.component';
import { HomeExperiencesComponent } from '../components/home/experiences/home-experiences.component';
import { HomeSkillsComponent } from '../components/home/skills/home-skills.component';
import { HomeSplashscreenComponent } from '../components/home/splashscreen/home-splashscreen.component';
import { HomeTrainingsComponent } from '../components/home/trainings/home-trainings.component';
import { LayoutAdminNavbarComponent } from '../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminSidebarComponent } from '../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminComponent } from '../components/layout/admin/layout-admin.component';
import { LayoutBlogComponent } from '../components/layout/blog/layout-blog.component';
import { LayoutCommonFooterComponent } from '../components/layout/common/footer/layout-common-footer.component';
import { LayoutCommonLegalMentionsComponent } from '../components/layout/common/legal-mentions/layout-common-legal-mentions.component';
import { LayoutCommonNavbarComponent } from '../components/layout/common/navbar/layout-common-navbar.component';
import { LayoutCommonComponent } from '../components/layout/common/layout-common.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MyMaterialModule } from './my-material.module';
import { ServicesModule } from './services.module';


@NgModule({
    declarations: [
        HomeAboutComponent,
        HomeCookieComponent,
        HomeExperiencesComponent,
        HomeSkillsComponent,
        HomeSplashscreenComponent,
        HomeTrainingsComponent,

        LayoutAdminNavbarComponent,
        LayoutAdminSidebarComponent,
        LayoutAdminComponent,

        LayoutBlogComponent,

        LayoutCommonFooterComponent,
        LayoutCommonLegalMentionsComponent,
        LayoutCommonNavbarComponent,
        LayoutCommonComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollToModule,
        RouterModule,
        LazyLoadImageModule,
        MyMaterialModule,
        ServicesModule
    ],
    exports: [
        HomeAboutComponent,
        HomeCookieComponent,
        HomeExperiencesComponent,
        HomeSkillsComponent,
        HomeSplashscreenComponent,
        HomeTrainingsComponent,

        LayoutAdminNavbarComponent,
        LayoutAdminSidebarComponent,
        LayoutAdminComponent,

        LayoutBlogComponent,

        LayoutCommonFooterComponent,
        LayoutCommonLegalMentionsComponent,
        LayoutCommonNavbarComponent,
        LayoutCommonComponent,
    ],
    providers: [],
})
export class ComponentsModule {
}
