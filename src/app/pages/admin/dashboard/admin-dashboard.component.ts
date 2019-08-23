import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
    templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {
    constructor(private seoService: SeoService) {
        this.seoService.prependPageTitle('Administration');
    }

}
