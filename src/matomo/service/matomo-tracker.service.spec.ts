import { TestBed, inject } from '@angular/core/testing';

import { MatomoTracker } from './matomo-tracker.service';
import { MatomoInjector } from './matomo-injector.service';

describe('MatomoTracker', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MatomoTracker, MatomoInjector]
        });
    });

    it(
        'should create service',
        inject([MatomoTracker], (service: MatomoTracker) => {
            expect(service).toBeTruthy();
        })
    );
});
