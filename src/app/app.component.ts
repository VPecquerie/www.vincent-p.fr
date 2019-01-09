import { Component } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>`,
})
export class AppComponent {
    constructor(private matomoInjector: MatomoInjector) {
        this.matomoInjector.init(environment.matomo.url, environment.matomo.id);
    }
}
