import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable()
export class RoutingService {

    private isRouterTrackingEnabled = false;
    private isAnalyticsEnabled = false;

    constructor(private router: Router) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (this.isRouterTrackingEnabled) {
                    console.log(event);
                }

                if (this.isAnalyticsEnabled) {
                    // @TODO: Record events. !
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
