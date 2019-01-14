"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var matomo_tracker_service_1 = require("./matomo-tracker.service");
describe('MatomoTracker', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [matomo_tracker_service_1.MatomoTracker]
        });
    });
    it('should create service', testing_1.inject([matomo_tracker_service_1.MatomoTracker], function (service) {
        expect(service).toBeTruthy();
    }));
    // it('should return 42 from getMeaning', inject([LibService], (service: LibService) => {
    //     expect(service.getMeaning()).toBe(42);
    // }));
});
//# sourceMappingURL=matomo-tracker.service.spec.js.map