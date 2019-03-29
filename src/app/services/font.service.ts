import { Injectable } from '@angular/core';
import * as WebFont from 'webfontloader';

@Injectable()
export class FontService {
    public load() {
        WebFont.load({
            google: {
                families: [
                    'Material Icons',
                    'Open Sans:300,700',
                    'Merriweather',
                    'Montserrat:600',
                    'Ralewa',
                    'Lora'
                ]
              },
            timeout: 1500
        });
    }
}
