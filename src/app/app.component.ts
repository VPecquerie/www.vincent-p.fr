import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>`,
})
export class AppComponent {
    constructor(@Inject(PLATFORM_ID) private platformId, private matomoInjector: MatomoInjector) {
        if (isPlatformBrowser(platformId)) {
            this.matomoInjector.init(environment.matomo.url, environment.matomo.id);
        }
    }
}
