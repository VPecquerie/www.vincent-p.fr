import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CustomHttpHandlerService } from '../../../services/errors/custom.http.handler.service';
import { AbstractComponent } from '../../abstract.component';

@Component({
    selector: 'app-home-splashscreen',
    templateUrl: './home-splashscreen.component.html',
    styleUrls: ['./home-splashscreen.component.scss'],
})
export class HomeSplashscreenComponent extends AbstractComponent implements OnInit, OnDestroy {
    public isLoading = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        super();
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.subscriptions.push(CustomHttpHandlerService.onLoad.subscribe(value => {
                this.isLoading = value !== 0;
            }));
        } else {
            this.isLoading = false;
        }
    }
}
