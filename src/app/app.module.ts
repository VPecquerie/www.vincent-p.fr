import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';

import { RavenErrorHandler } from './services/errors/raven.error.handler';
import { MyMaterialModule } from './my-material/my-material.module';

import { HomeComponent } from './home/home.component';
import { HomeTopbarComponent } from './home/topbar/home.topbar.component';
import { routes } from './app.routes';
import { HomeSplashScreenComponent } from './home/splashscreen/home.splashscreen.component';
import { TextService } from './services/text.service';
import { HomeAboutService } from './home/about/home.about.service.component';
import { HomeAboutComponent } from './home/about/home.about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { CustomHttpHandler } from './services/errors/custom.http.handler';
import { HomeContactComponent } from './home/contact/home.contact.component';
import { HomeContactService } from './home/contact/home.contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeExperienceComponent } from './home/experience/home.experience.component';
import { HomeExperienceService } from './home/experience/home.experience.service';
import { MomentJsPipe } from './pipes/momentjs.pipe';
import { HomeSkillsComponent } from './home/skills/home.skills.component';
import { HomeSkillsService } from './home/skills/home.skills.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomeTopbarComponent,
        HomeSplashScreenComponent,
        HomeAboutComponent,
        HomeSkillsComponent,
        HomeExperienceComponent,
        HomeContactComponent,
        MomentJsPipe
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        TransferHttpCacheModule,
        MyMaterialModule,
        ScrollToModule.forRoot(),
        RouterModule.forRoot(routes, { enableTracing: true }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        { provide: ErrorHandler, useClass: RavenErrorHandler },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpHandler,
            multi: true,
        },
        TextService,
        HomeAboutService,
        UserService,
        HomeSkillsService,
        HomeContactService,
        HomeExperienceService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
