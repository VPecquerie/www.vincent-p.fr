"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
/**
 * Service for injecting the Matomo tracker in the application.
 *
 * @export
 */
var MatomoInjector = (function () {
    /**
     * Creates an instance of MatomoInjector.
     *
     * @memberof MatomoInjector
     */
    function MatomoInjector(platformId) {
        this.platformId = platformId;
        if (common_1.isPlatformBrowser(platformId)) {
            window._paq = window._paq || [];
        }
        else {
            console.log('Matomo couldn\'t be use on server platform.');
        }
    }
    /**
     * Injects the Matomo tracker in the DOM.
     *
     * @param url: URL of the Matomo instance to connect to.
     * @param id : SiteId for this application/site.
     * @memberof MatomoInjector
     */
    MatomoInjector.prototype.init = function (url, id) {
        if (common_1.isPlatformBrowser(this.platformId)) {
            window._paq.push(['trackPageView']);
            window._paq.push(['enableLinkTracking']);
            (function () {
                var u = url;
                window._paq.push(['setTrackerUrl', u + 'piwik.php']);
                window._paq.push(['setSiteId', id.toString()]);
                var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
                g.type = 'text/javascript';
                g.async = true;
                g.defer = true;
                g.src = u + 'piwik.js';
                s.parentNode.insertBefore(g, s);
            })();
        }
        else {
            console.log('Matomo couldn\'t be use on server platform.');
        }
    };
    MatomoInjector = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [Object])
    ], MatomoInjector);
    return MatomoInjector;
}());
exports.MatomoInjector = MatomoInjector;
//# sourceMappingURL=matomo-injector.service.js.map