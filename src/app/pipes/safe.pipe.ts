import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content: string, type: string) {


        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(content);

            case 'css':
                return this.sanitizer.bypassSecurityTrustStyle(content);

            case 'js':
                return this.sanitizer.bypassSecurityTrustScript(content);

            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(content);

            default:
                console.warn('SafePipe is called without any type. Return content as is.');
                return content;
        }

    }
}
