"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var matomo_injector_service_1 = require("./matomo-injector.service");
describe('MatomoInjector', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [matomo_injector_service_1.MatomoInjector]
        });
    });
    it('should create service', testing_1.inject([matomo_injector_service_1.MatomoInjector], function (service) {
        expect(service).toBeTruthy();
    }));
    // it('should return 42 from getMeaning', inject([LibService], (service: LibService) => {
    //     expect(service.getMeaning()).toBe(42);
    // }));
});
//# sourceMappingURL=matomo-injector.service.spec.js.map