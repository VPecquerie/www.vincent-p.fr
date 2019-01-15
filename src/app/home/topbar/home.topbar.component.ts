import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-topbar',
    templateUrl: './home.topbar.component.html',
    styleUrls: ['./home.topbar.component.scss'],
})
export class HomeTopbarComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: string, private router: Router) {
    }


    ngOnInit(): void {

        if (isPlatformBrowser(this.platformId)) {
            window['$'](document).scroll(function() {
                const nav = window['$']('#topbar');
                nav.toggleClass('scrolled', window['$'](this).scrollTop() > nav.height());
            });
            window['$']('body').scrollspy({ target: '#topbar' });
        }
    }

    redirectToAdmin() {
        this.router.navigate(['/admin/login']);
    }
}
