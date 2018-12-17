import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable()
export class RoutingService {

    private isRouterTrackingEnabled: boolean = false;
    private isGoogleAnalyticsEnabled: boolean = false;

    constructor(private router: Router) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (this.isRouterTrackingEnabled) {
                    console.log(event);
                }

                if (this.isGoogleAnalyticsEnabled) {
                    (<any>window).ga('set', 'page', event.urlAfterRedirects);
                    (<any>window).ga('send', 'pageview');
                }

            }
        });

    }

    enableGoogleAnalytics() {
        this.isGoogleAnalyticsEnabled = true;
    }

    enableRouterTracing() {
        this.isRouterTrackingEnabled = true;
    }
}
