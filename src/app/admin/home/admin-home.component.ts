import { Component } from '@angular/core';
import { SEOService } from '../../services/seo.service';

@Component({
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
    constructor(private seoService: SEOService) {
        this.seoService.prependPageTitle('Administration');
    }

}
