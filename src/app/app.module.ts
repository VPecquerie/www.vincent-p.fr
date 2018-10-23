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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomeTopbarComponent,
        HomeSplashScreenComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        TransferHttpCacheModule,
        MyMaterialModule,
        ScrollToModule.forRoot(),
        RouterModule.forRoot(routes, { enableTracing: true }),
    ],
    providers: [{ provide: ErrorHandler, useClass: RavenErrorHandler }],
    bootstrap: [AppComponent],
})
export class AppModule {}
