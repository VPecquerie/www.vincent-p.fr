import { Component, Input, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo.service';

@Component({
    selector: 'app-layout-blog',
    templateUrl: './layout-blog.component.html',
    styleUrls: ['./layout-blog.component.scss'],
})
export class LayoutBlogComponent implements OnInit {
    @Input()
    title: string;

    @Input()
    subtitle: string;

    @Input()
    meta: string;

    @Input()
    coverImage: string;

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService.prependPageTitle(this.title + ' - Blog');
    }

    getUrl() {
        if (this.coverImage == null) {
            return 'url(/assets/images/splash-blog.jpg)';
        } else {
            return 'url(' + this.coverImage + ')';
        }
    }
}
