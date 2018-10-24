import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CustomHttpHandler } from '../../services/errors/custom.http.handler';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-home-splashscreen',
    templateUrl: './home.splashscreen.component.html',
    styleUrls: ['./home.splashscreen.component.scss'],
})
export class HomeSplashScreenComponent implements OnInit {
    public isLoading;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            CustomHttpHandler.onLoad.subscribe(value => {
                if (value === 0) {
                    this.isLoading = false;
                } else {
                    this.isLoading = true;
                }
            });
        } else {
            this.isLoading = false;
        }
    }
}
