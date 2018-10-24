import { Component, OnInit } from '@angular/core';
import { CustomHttpHandler } from '../../services/errors/custom.http.handler';

@Component({
    selector: 'app-home-splashscreen',
    templateUrl: './home.splashscreen.component.html',
    styleUrls: ['./home.splashscreen.component.scss'],
})
export class HomeSplashScreenComponent implements OnInit {
    public isLoading = true;

    ngOnInit(): void {
        CustomHttpHandler.onLoad.subscribe(value => {
            if (value === 0) {
                this.isLoading = false;
            }
        });
    }
}
