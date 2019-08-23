import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RavenModule } from 'ngx-raven';
import { UserService } from './services/user.service';
import { CustomHttpHandlerService } from './services/errors/custom.http.handler.service';
import { NotificationService } from './services/notification.service';
import { RoutingService } from './services/routing.service';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CookieService } from './services/cookie.service';
import { MatomoInjector } from '../matomo/service/matomo-injector.service';
import { MatomoTracker } from '../matomo/service/matomo-tracker.service';
import { UserHttpService } from './services/entities/user.http.service';
import { SeoService } from './services/seo.service';
import { FontService } from './services/font.service';
import { QuillModule } from 'ngx-quill';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { MyMaterialModule } from './modules/my-material.module';
import { ComponentsModule } from './modules/components.module';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'www-vincent-p-fr' }),
        TransferHttpCacheModule,
        ScrollToModule.forRoot(),
        QuillModule.forRoot(),
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
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
        LazyLoadImageModule,
        MyMaterialModule,
        ComponentsModule,
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
        RoutingService,
        MatomoInjector,
        MatomoTracker,
        UserHttpService,
        FontService,
        { provide: LOCALE_ID, useValue: 'fr-FR' },
    ],
})
export class AppModule {
}
