import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(private seoService: SeoService) {
        this.seoService.prependPageTitle('Accueil');
    }

}
