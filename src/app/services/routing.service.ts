import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MatomoTracker } from '../../matomo/service/matomo-tracker.service';
import { Service } from './abstract.service';

@Injectable()
export class RoutingService extends Service {

    private isRouterTrackingEnabled = false;
    private isAnalyticsEnabled = false;

    constructor(@Inject(PLATFORM_ID) private platformId, private router: Router, private matomoTracker: MatomoTracker) {

        super();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (this.isRouterTrackingEnabled && isPlatformBrowser(platformId)) {
                    this.matomoTracker.trackEvent('tracking', 'navigation', event.urlAfterRedirects, event.id);
                }
            }
        });

    }

    enableAnalytics() {
        this.isAnalyticsEnabled = true;
    }

    enableRouterTracing() {
        this.isRouterTrackingEnabled = true;
    }
}
