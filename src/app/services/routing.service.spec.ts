import { TestBed, inject } from '@angular/core/testing';

import { RoutingService } from './routing.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatomoTracker } from '../../matomo/service/matomo-tracker.service';
import { MatomoInjector } from '../../matomo/service/matomo-injector.service';

describe('RoutingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MatomoInjector, MatomoTracker, RoutingService],
            imports: [RouterTestingModule],
        });
    });

    it('should be created', inject([RoutingService], (service: RoutingService) => {
        expect(service).toBeTruthy();
    }));
});
