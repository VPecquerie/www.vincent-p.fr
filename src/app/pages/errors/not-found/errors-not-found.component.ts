import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

@Component({
    templateUrl: './errors-not-found.component.html',
    styles: ['./errors-not-found.component.scss'],
})
export class ErrorsNotFoundComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                @Optional() @Inject(RESPONSE) private response: Response) {
    }

    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            this.response.status(404);
        }
    }
}
