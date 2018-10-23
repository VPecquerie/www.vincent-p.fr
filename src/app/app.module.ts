import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Route } from '@angular/router';



import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { RavenErrorHandler } from './services/errors/raven.error.handler';
import { MyMaterialModule } from './my-material/my-material.module';

import { HomeComponent } from './home/home.component';
import { HomeTopbarComponent } from './home/topbar/home.topbar.component';
import { routes } from './app.routes';

@NgModule({
    declarations: [AppComponent, HomeComponent, HomeTopbarComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        TransferHttpCacheModule,
        MyMaterialModule,
        RouterModule.forRoot(routes, { enableTracing: true }),
    ],
    providers: [{ provide: ErrorHandler, useClass: RavenErrorHandler }],
    bootstrap: [AppComponent],
})
export class AppModule {}
