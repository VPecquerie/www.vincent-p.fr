import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RavenModule } from 'ngx-raven';
import { CookieService } from 'ngx-cookie-service';
// Common Modules :
import { MyMaterialModule } from './my-material/my-material.module';

// Common Services :
import { TextService } from './services/text.service';
import { UserService } from './services/user.service';
import { CustomHttpHandler } from './services/errors/custom.http.handler';
import { NotificationService } from './services/notification.service';

// Common Pipes :
import { MomentJsPipe } from './pipes/momentjs.pipe';

// Config :
import { routes } from './app.routes';
import { environment } from '../environments/environment';

// Components:
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeTopbarComponent } from './home/topbar/home.topbar.component';
import { HomeSplashScreenComponent } from './home/splashscreen/home.splashscreen.component';
import { HomeAboutService } from './home/about/home.about.service.component';
import { HomeAboutComponent } from './home/about/home.about.component';
import { HomeContactComponent } from './home/contact/home.contact.component';
import { HomeContactService } from './home/contact/home.contact.service';
import { HomeExperienceComponent } from './home/experience/home.experience.component';
import { HomeExperienceService } from './home/experience/home.experience.service';
import { HomeSkillsComponent } from './home/skills/home.skills.component';
import { HomeSkillsService } from './home/skills/home.skills.service';
import { HomeTrainingComponent } from './home/trainings/home.trainings.component';
import { HomeTrainingService } from './home/trainings/home.trainings.service';
import { LegalMentionsComponent } from './home/legal-mentions/legal-mentions.component';
import { HomeCookieComponent } from './home/cookie/home.cookie.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        HomeComponent,
        HomeTopbarComponent,
        HomeSplashScreenComponent,
        HomeAboutComponent,
        HomeSkillsComponent,
        HomeExperienceComponent,
        HomeContactComponent,
        HomeTrainingComponent,
        HomeCookieComponent,
        LegalMentionsComponent,
        MomentJsPipe
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        TransferHttpCacheModule,
        ScrollToModule.forRoot(),
        RouterModule.forRoot(routes, { enableTracing: !environment.production }),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        RavenModule.forRoot({
            dsn: environment.sentry.configUrl,
            reportDialog: true, // optional, false by default
            enabled: environment.production
        }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MyMaterialModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpHandler,
            multi: true,
        },
        CookieService,
        NotificationService,
        TextService,
        HomeAboutService,
        UserService,
        HomeSkillsService,
        HomeContactService,
        HomeExperienceService,
        HomeTrainingService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
