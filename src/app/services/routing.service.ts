import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable()
export class RoutingService {
    constructor(private router: Router) {
    }

    public recordEvents() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                (<any>window).ga('set', 'page', event.urlAfterRedirects);
                (<any>window).ga('send', 'pageview');
            }
        });
    }
}
