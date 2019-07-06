import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FontService } from './services/font.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: any,
                private fontService: FontService) {
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.fontService.load();
        }
    }
}
