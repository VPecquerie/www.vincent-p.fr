import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { RoutingService } from '../../services/routing.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home-cookie',
    templateUrl: './home.cookie.component.html',
    styleUrls: ['./home.cookie.component.scss'],
})
export class HomeCookieComponent implements OnInit {
    private cookieName: string = 'cookies_user_preferences';
    public visible = false;
    public accepted = false;


    public form = new FormGroup({
        canUseAnalytics: new FormControl('', []),
        canTrackUserActions: new FormControl('', []),
    });


    constructor(@Inject(PLATFORM_ID) private platformId: string,
                private cookieService: CookieService,
                private routingService: RoutingService) {
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.cookieService.check(this.cookieName)) {
                this.visible = true;
                this.accepted = false;
                (<any>window).$('#cookie-modal').modal('show');
            } else {
                const value = JSON.parse(this.cookieService.get(this.cookieName));
                if (value.canTrackUserActions) {
                    this.routingService.enableRouterTracing();
                }
                if (value.canUseAnalytics) {
                    this.routingService.enableGoogleAnalytics();
                }
            }
        }
    }

    valid() {
        if (this.form.valid) {
            const values = this.form.getRawValue();
            this.cookieService.set(this.cookieName, JSON.stringify(values));
        }
    }

}
