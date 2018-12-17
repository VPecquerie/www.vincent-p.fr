import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd, Router } from '@angular/router';
import { RoutingService } from '../../services/routing.service';

@Component({
    selector: 'app-home-cookie',
    templateUrl: './home.cookie.component.html',
    styleUrls: ['./home.cookie.component.scss'],
})
export class HomeCookieComponent implements OnInit {
    public visible = false;
    public accepted = false;

    constructor(@Inject(PLATFORM_ID) private platformId: string,
                private cookieService: CookieService,
                private routingService: RoutingService) {
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.cookieService.check('is_user_accept_cookies')) {
                this.visible = true;
                this.accepted = false;
                (<any>window).$('#cookie-modal').modal('show');
            } else {
                this.accepted = (this.cookieService.get('is_user_accept_cookies') === 'true');
            }

            if (this.accepted) {
                this.routingService.recordEvents();
            }
        }
    }

}
