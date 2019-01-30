import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
    constructor(private seoService: SeoService) {
        this.seoService.prependPageTitle('Administration');
    }

}
