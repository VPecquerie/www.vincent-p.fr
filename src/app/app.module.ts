import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {RouterModule} from '@angular/router';

import * as Raven from 'raven-js';

import { AppComponent } from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { RavenErrorHandler } from './services/errors/raven.error.handler';
import { MyMaterialModule } from './my-material/my-material.module';

import { HomeComponent} from './home/home.component';

Raven
  .config('https://67482976a2124dd8bffbebaa5aa2eee6@sentry.we-program-it.com/2')
  .install();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    MyMaterialModule
  ],
  providers: [ { provide: ErrorHandler, useClass: RavenErrorHandler } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
