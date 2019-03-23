import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RavenModule } from 'ngx-raven';
import { MyMaterialModule } from './my-material/my-material.module';
import { UserService } from './services/user.service';
import { CustomHttpHandlerService } from './services/errors/custom.http.handler.service';
import { NotificationService } from './services/notification.service';
import { RoutingService } from './services/routing.service';
import { MomentjsPipe } from './pipes/momentjs.pipe';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeTopbarComponent } from './home/topbar/home.topbar.component';
import { HomeSplashScreenComponent } from './home/splashscreen/home.splashscreen.component';
import { HomeAboutComponent } from './home/about/home.about.component';
import { HomeContactComponent } from './home/contact/home.contact.component';
import { HomeContactService } from './home/contact/home.contact.service';
import { HomeExperienceComponent } from './home/experience/home.experience.component';
import { HomeSkillsComponent } from './home/skills/home.skills.component';
import { HomeTrainingsComponent } from './home/trainings/home.trainings.component';
import { LegalMentionsComponent } from './home/legal-mentions/legal-mentions.component';
import { HomeCookieComponent } from './home/cookie/home.cookie.component';
import { CookieService } from './services/cookie.service';
import { MatomoInjector } from '../matomo/service/matomo-injector.service';
import { MatomoTracker } from '../matomo/service/matomo-tracker.service';
import { CompanyHttpService } from './services/entities/company.http.service';
import { ExperienceHttpService } from './services/entities/experience.http.service';
import { SkillHttpService } from './services/entities/skill.http.service';
import { SkillgroupHttpService } from './services/entities/skillgroup.http.service';
import { TextEntityHttpService } from './services/entities/text.entity.http.service';
import { TokeninfoHttpService } from './services/entities/tokeninfo.http.service';
import { TrainingHttpService } from './services/entities/training.http.service';
import { UserHttpService } from './services/entities/user.http.service';
import { SeoService } from './services/seo.service';
import { ArticleHttpService } from './services/entities/article.http.service';
import { PipesModule } from './pipes/pipes.module';

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
        HomeTrainingsComponent,
        HomeCookieComponent,
        LegalMentionsComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'www-vincent-p-fr' }),
        TransferHttpCacheModule,
        ScrollToModule.forRoot(),
        RouterModule.forRoot(routes),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        RavenModule.forRoot({
            dsn: environment.sentry.configUrl,
            reportDialog: !environment.production, // optional, false by default
            enabled: environment.production,
        }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MyMaterialModule,
        PipesModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpHandlerService,
            multi: true,
        },
        CookieService,
        NotificationService,
        UserService,
        SeoService,
        HomeContactService,
        RoutingService,
        MatomoInjector,
        MatomoTracker,
        ArticleHttpService,
        CompanyHttpService,
        ExperienceHttpService,
        SkillHttpService,
        SkillgroupHttpService,
        TextEntityHttpService,
        TokeninfoHttpService,
        TrainingHttpService,
        UserHttpService
    ],
})
export class AppModule {
}
