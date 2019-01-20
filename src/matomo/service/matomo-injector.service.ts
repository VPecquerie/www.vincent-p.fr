import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let window: any;

@Injectable()
export class MatomoInjector {

    private scope: any;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(platformId)) {
            this.scope = window['_paq'] || [];
        } else {
            console.log('Matomo couldn\'t be use on server platform.');
        }
    }

    init(url: string, id: number) {
        if (isPlatformBrowser(this.platformId)) {
            this.scope.push(['trackPageView']);
            this.scope.push(['enableLinkTracking']);
            (() => {
                const u = url;
                this.scope.push(['setTrackerUrl', u + 'piwik.php']);
                this.scope.push(['setSiteId', id.toString()]);
                const d = document,
                    g = d.createElement('script'),
                    s = d.getElementsByTagName('script')[0];
                g.type = 'text/javascript';
                g.async = true;
                g.defer = true;
                g.src = u + 'piwik.js';
                s.parentNode.insertBefore(g, s);
            })();
        } else {
            console.log('Matomo couldn\'t be use on server platform.');
        }
    }
}
