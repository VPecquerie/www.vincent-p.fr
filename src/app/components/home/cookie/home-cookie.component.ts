import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from '../../../services/cookie.service';
import { RoutingService } from '../../../services/routing.service';
import { environment } from '../../../../environments/environment';


@Component({
    selector: 'app-home-cookie',
    templateUrl: './home-cookie.component.html',
    styleUrls: ['./home-cookie.component.scss'],
})
export class HomeCookieComponent implements OnInit {
    private cookieName = 'cookies_user_preferences';
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
                if (environment.production) {
                    (<any>window).$('#cookie-modal').modal('show');
                }
            } else {
                const value = JSON.parse(this.cookieService.get(this.cookieName));
                if (value.canTrackUserActions) {
                    this.routingService.enableRouterTracing();
                }
                if (value.canUseAnalytics) {
                    this.routingService.enableAnalytics();
                }
            }
        }
    }

    valid() {
        if (this.form.valid) {
            const values = this.form.getRawValue();
            this.cookieService.set(this.cookieName, JSON.stringify(values), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
        }
    }

}
