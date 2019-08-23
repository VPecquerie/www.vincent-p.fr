import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout-common-navbar',
    templateUrl: './layout-common-navbar.component.html',
    styleUrls: ['./layout-common-navbar.component.scss'],
})
export class LayoutCommonNavbarComponent implements OnInit {
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

    goToAdmin() {
        this.router.navigate(['/admin/login']);
    }
}
