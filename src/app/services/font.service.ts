import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class FontService {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    }

    public load() {
        if (isPlatformBrowser(this.platformId)) {
            const WebFont = require('webfontloader');
            WebFont.load({
                google: {
                    families: [
                        'Material Icons',
                        'Open Sans:300,700',
                        'Merriweather',
                        'Montserrat:600',
                        'Ralewa',
                        'Lora',
                    ],
                },
                timeout: 1500,
            });
        }
    }
}
