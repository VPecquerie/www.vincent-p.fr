import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    constructor(@Inject(DOCUMENT) private document: Document,
                private title: Title) {
        this.createLinkForCanonicalURL();
    }

    public prependPageTitle(prepend: string) {
        const title = prepend + ' - Vincent PECQUERIE - Développeur Web et Mobile';
        this.setPageTitle(title);
    }

    public setPageTitle(title: string) {
        this.title.setTitle(title);
    }

    public getPageTitle(): string {
        return this.title.getTitle();
    }

    private createLinkForCanonicalURL() {
        const link: HTMLLinkElement = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', this.document.URL);
        this.document.head.appendChild(link);
    }
}
