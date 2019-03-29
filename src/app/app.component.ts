import { Component, OnInit } from '@angular/core';
import { FontService } from './services/font.service';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    constructor(private fontService: FontService) {
    }

    ngOnInit(): void {
        this.fontService.load();
    }
}
