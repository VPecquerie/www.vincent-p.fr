import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let window: any;

@Injectable()
export class MatomoInjector {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(platformId)) {
            window._paq = window._paq || [];
        } else {
            console.log('Matomo couldn\'t be use on server platform.');
        }
    }

    init(url: string, id: number) {
        if (isPlatformBrowser(this.platformId)) {
            window._paq.push(['trackPageView']);
            window._paq.push(['enableLinkTracking']);
            (() => {
                const u = url;
                window._paq.push(['setTrackerUrl', u + 'piwik.php']);
                window._paq.push(['setSiteId', id.toString()]);
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
