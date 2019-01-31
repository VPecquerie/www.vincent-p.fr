import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
    templateUrl: './admin-home.component.html',
})
export class AdminHomeComponent {
    constructor(private seoService: SeoService) {
        this.seoService.prependPageTitle('Administration');
    }

}
