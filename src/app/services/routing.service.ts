import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatomoTracker } from 'ngx-matomo';

@Injectable()
export class RoutingService {

    private isRouterTrackingEnabled = false;
    private isAnalyticsEnabled = false;

    constructor(private router: Router, private matomoTracker: MatomoTracker) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (this.isRouterTrackingEnabled) {
                    this.matomoTracker.trackEvent('tracking', 'navigation', event.urlAfterRedirects, event.id);
                }

                if (this.isAnalyticsEnabled) {
                    // @TODO: Récupérer des infos sur les gens !
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
