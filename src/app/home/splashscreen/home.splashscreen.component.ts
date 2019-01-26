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

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            CustomHttpHandler.onLoad.subscribe(value => {
                this.isLoading = value !== 0;
            });
        } else {
            this.isLoading = false;
        }
    }
}
