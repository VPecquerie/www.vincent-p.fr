import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Wrapper for functions available for the Matomo Javascript tracker.
 *
 * @export
 */
@Injectable()
export class MatomoTracker {

    private scope: any;

    /**
     * Creates an instance of MatomoTracker.
     *
     * @memberof MatomoTracker
     */
    constructor(@Inject(PLATFORM_ID) private platformId: object) {
        if (!isPlatformBrowser(platformId)) {
            console.warn('Matomo is not compatible on server side');
            this.scope = [];
        } else {
            this.scope = window['_paq'];
        }

        if (typeof this.scope === 'undefined') {
            console.warn('Matomo has not yet been initialized! (Did you forget to inject it?)');
        }
    }

    /**
     * Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
     *
     * @param category
     * @param action
     * @param [name]
     * @param [value]
     * @memberof MatomoTracker
     */
    trackEvent(category: string, action: string, name?: string, value?: number): void {
        try {
            const args: any[] = [category, action];
            if (!!name) {
                args.push(name);
            }
            if (!!value) {
                args.push(value);
            }
            this.scope.push(['trackEvent', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Logs a visit to this page.
     *
     * @param [customTitle]
     * @memberof MatomoTracker
     */
    trackPageView(customTitle?: string): void {
        try {
            const args: any[] = [];
            if (!!customTitle) {
                args.push(customTitle);
            }
            this.scope.push(['trackPageView', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * @param keyword
     * @param [category]
     * @param [resultsCount]
     * @memberof MatomoTracker
     */
    trackSiteSearch(keyword: string, category?: string, resultsCount?: number): void {
        try {
            const args: any[] = [keyword];
            if (!!category) {
                args.push(category);
            }
            if (!!resultsCount) {
                args.push(resultsCount);
            }
            this.scope.push(['trackSiteSearch', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * @param idGoal
     * @param [customRevenue]
     * @memberof MatomoTracker
     */
    trackGoal(idGoal: number, customRevenue?: number): void {
        try {
            const args: any[] = [idGoal];
            if (!!customRevenue) {
                args.push(customRevenue);
            }
            this.scope.push(['trackGoal', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Manually logs a click from your own code.
     *
     * @param url: is the full URL which is to be tracked as a click.
     * @param linkType: can either be 'link' for an outlink or 'download' for a download.
     * @memberof MatomoTracker
     */
    trackLink(url: string, linkType: string): void {
        try {
            const args: any[] = [url, linkType];
            this.scope.push(['trackLink', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * @memberof MatomoTracker
     */
    trackAllContentImpressions(): void {
        try {
            this.scope.push(['trackAllContentImpressions']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.
     * It tracks an impression only if a content block is actually visible.
     *
     * @param checkOnScroll
     * @param timeIntervalInMs
     * @memberof MatomoTracker
     */
    trackVisibleContentImpressions(checkOnScroll: boolean, timeIntervalInMs: number): void {
        try {
            const args: any[] = [checkOnScroll, timeIntervalInMs];
            this.scope.push(['trackVisibleContentImpressions', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * @param domNode
     * @memberof MatomoTracker
     */
    trackContentImpressionsWithinNode(domNode: Node): void {
        try {
            const args: any[] = [domNode];
            this.scope.push(['trackContentImpressionsWithinNode', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Tracks an interaction with the given DOM node / content block.
     *
     * @param domNode
     * @param contentInteraction
     * @memberof MatomoTracker
     */
    trackContentInteractionNode(domNode: Node, contentInteraction: string): void {
        try {
            const args: any[] = [domNode, contentInteraction];
            this.scope.push(['trackContentInteractionNode', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Tracks a content impression using the specified values.
     *
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    trackContentImpression(contentName: string, contentPiece: string, contentTarget: string): void {
        try {
            const args: any[] = [contentName, contentPiece, contentTarget];
            this.scope.push(['trackContentImpression', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Tracks a content interaction using the specified values.
     *
     * @param contentInteraction
     * @param contentName
     * @param contentPiece
     * @param contentTarget
     * @memberof MatomoTracker
     */
    trackContentInteraction(
        contentInteraction: string,
        contentName: string,
        contentPiece: string,
        contentTarget: string
    ): void {
        try {
            const args: any[] = [contentInteraction, contentName, contentPiece, contentTarget];
            this.scope.push(['trackContentInteraction', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Logs all found content blocks within a page to the console. This is useful to debug / test content tracking.
     *
     * @memberof MatomoTracker
     */
    logAllContentBlocksOnPage(): void {
        try {
            this.scope.push(['logAllContentBlocksOnPage']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Installs link tracking on all applicable link elements.
     * Set the enable parameter to true to use pseudo click-handler (treat middle click and open contextmenu as left click).
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected. If "false" (default), nothing will be tracked on open context menu or middle click.
     *
     * @param enable
     * @memberof MatomoTracker
     */
    enableLinkTracking(enable: boolean): void {
        try {
            const args: any[] = [enable];
            this.scope.push(['enableLinkTracking', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Install a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.
     * These requests will be sent only when the user is actively viewing the page( when the tab is active and in focus).
     * These requests will not track additional actions or pageviews.
     * By default, delayInSeconds is set to 15 seconds.
     *
     * @param delayInSeconds
     * @memberof MatomoTracker
     */
    enableHeartBeatTimer(delayInSeconds: number): void {
        try {
            const args: any[] = [delayInSeconds];
            this.scope.push(['enableHeartBeatTimer', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies. This means the cookie can only be accessed by pages on the same domain. If you own multiple domains and
     * would like to track all the actions and pageviews of a specific visitor into the same visit, you may enable cross domain
     * linking (learn more) . Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards
     * the current visitor ID value to the page of the different domain.
     *
     * @memberof MatomoTracker
     */
    enableCrossDomainLinking(): void {
        try {
            this.scope.push(['enableCrossDomainLinking']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * @param timeout
     * @memberof MatomoTracker
     */
    setCrossDomainLinkingTimeout(timeout: number): void {
        try {
            const args: any[] = [timeout];
            this.scope.push(['setCrossDomainLinkingTimeout', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Overrides document.title
     *
     * @param title
     * @memberof MatomoTracker
     */
    setDocumentTitle(title: string): void {
        try {
            const args: any[] = [title];
            this.scope.push(['setDocumentTitle', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets array of hostnames or domains to be treated as local.
     * For wildcard subdomains, you can use: setDomains('.example.com'); or setDomains('*.example.com');.
     * You can also specify a path along a domain: setDomains('*.example.com/subsite1');
     *
     * @param domains
     * @memberof MatomoTracker
     */
    setDomains(domains: string[]): void {
        try {
            const args: any[] = [domains];
            this.scope.push(['setDomains', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Override the page's reported URL.
     *
     * @param url
     * @memberof MatomoTracker
     */
    setCustomUrl(url: string): void {
        try {
            const args: any[] = [url];
            this.scope.push(['setCustomUrl', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Overrides the detected Http-Referer.
     *
     * @param url
     * @memberof MatomoTracker
     */
    setReferrerUrl(url: string): void {
        try {
            const args: any[] = [url];
            this.scope.push(['setReferrerUrl', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Specifies the website ID.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param siteId
     * @memberof MatomoTracker
     */
    setSiteId(siteId: number): void {
        try {
            const args: any[] = [siteId];
            this.scope.push(['setSiteId', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Specify the Matomo HTTP API URL endpoint. Points to the root directory of piwik,
     * e.g. http://piwik.example.org/ or https://example.org/piwik/.
     * This function is only useful when the 'Overlay' report is not working.
     * By default, you do not need to use this function.
     *
     * @param url
     * @memberof MatomoTracker
     */
    setApiUrl(url: string): void {
        try {
            const args: any[] = [url];
            this.scope.push(['setApiUrl', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Specifies the Matomo server URL.
     * Redundant: can be specified in getTracker() constructor.
     *
     * @param url
     * @memberof MatomoTracker
     */
    setTrackerUrl(url: string): void {
        try {
            const args: any[] = [url];
            this.scope.push(['setTrackerUrl', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Returns the Matomo server URL.
     *
     * @memberof MatomoTracker
     */
    getPiwikUrl(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().getPiwikUrl())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Returns the current url of the page that is currently being visited.
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * @memberof MatomoTracker
     */
    getCurrentUrl(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().getCurrentUrl())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    setDownloadClasses(classes: string | string[]): void {
        try {
            const args: any[] = [classes];
            this.scope.push(['setDownloadClasses', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets list of file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    setDownloadExtensions(extensions: string | string[]): void {
        try {
            const args: any[] = [extensions];
            this.scope.push(['setDownloadClasses', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets additional file extensions to be recognized as downloads.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    addDownloadExtensions(extensions: string | string[]): void {
        try {
            const args: any[] = [extensions];
            this.scope.push(['setDownloadClasses', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets file extensions to be removed from the list of download file extensions.
     * Example: 'doc' or['doc', 'xls'].
     *
     * @param extensions
     * @memberof MatomoTracker
     */
    removeDownloadExtensions(extensions: string | string[]): void {
        try {
            const args: any[] = [extensions];
            this.scope.push(['setDownloadClasses', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    setIgnoreClasses(classes: string | string[]): void {
        try {
            const args: any[] = [classes];
            this.scope.push(['setDownloadClasses', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Set classes to be treated as outlinks (in addition to piwik_link).
     *
     * @param classes
     * @memberof MatomoTracker
     */
    setLinkClasses(classes: string | string[]): void {
        try {
            const args: any[] = [classes];
            this.scope.push(['setDownloadClasses', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Set delay for link tracking (in milliseconds).
     *
     * @param delay
     * @memberof MatomoTracker
     */
    setLinkTrackingTimer(delay: number): void {
        try {
            const args: any[] = [delay];
            this.scope.push(['setLinkTrackingTimer', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Returns delay for link tracking (in milliseconds).
     *
     * @memberof MatomoTracker
     */
    getLinkTrackingTimer(): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().getLinkTrackingTimer())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Set to true to not record the hash tag (anchor) portion of URLs
     *
     * @param value
     * @memberof MatomoTracker
     */
    discardHashTag(value: boolean): void {
        try {
            const args: any[] = [value];
            this.scope.push(['discardHashTag', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite the value by specifying a milliseconds value here.
     *
     * @param generationTime
     * @memberof MatomoTracker
     */
    setGenerationTimeMs(generationTime: number): void {
        try {
            const args: any[] = [generationTime];
            this.scope.push(['setGenerationTimeMs', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Appends a custom string to the end of the HTTP request to piwik.php?
     *
     * @param appendToUrl
     * @memberof MatomoTracker
     */
    appendToTrackingUrl(appendToUrl: string): void {
        try {
            const args: any[] = [appendToUrl];
            this.scope.push(['appendToTrackingUrl', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Set to true to not track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * @param doNotTrack
     * @memberof MatomoTracker
     */
    setDoNotTrack(doNotTrack: boolean): void {
        try {
            const args: any[] = [doNotTrack];
            this.scope.push(['setDoNotTrack', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     *
     * @memberof MatomoTracker
     */
    killFrame(): void {
        try {
            this.scope.push(['killFrame']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Forces the browser load the live URL if the tracked web page is loaded from a local file (e.g., saved to someone's desktop).
     *
     * @param url
     * @memberof MatomoTracker
     */
    redirectFile(url: string): void {
        try {
            const args: any[] = [url];
            this.scope.push(['redirectFile', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Records how long the page has been viewed if the minimumVisitLength (in seconds) is attained;
     * the heartBeatDelay determines how frequently to update the server
     *
     * @param minimumVisitLength
     * @param heartBeatDelay
     * @memberof MatomoTracker
     */
    setHeartBeatTimer(minimumVisitLength: number, heartBeatDelay: number): void {
        try {
            const args: any[] = [minimumVisitLength, heartBeatDelay];
            this.scope.push(['setHeartBeatTimer', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Returns the 16 characters ID for the visitor
     *
     * @memberof MatomoTracker
     */
    getVisitorId(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().getVisitorId())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Returns the visitor cookie contents in an array
     *
     * @memberof MatomoTracker
     */
    getVisitorInfo(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().getVisitorInfo())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Returns the visitor attribution array (Referer information and / or Campaign name & keyword).
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * @memberof MatomoTracker
     */
    getAttributionInfo(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().getAttributionInfo())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Returns the attribution campaign name.
     *
     * @memberof MatomoTracker
     */
    getAttributionCampaignName(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([
                    () => resolve(window['Piwik'].getTracker().getAttributionCampaignName())
                ]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Returns the attribution campaign keyword.
     *
     * @memberof MatomoTracker
     */
    getAttributionCampaignKeyword(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([
                    () => resolve(window['Piwik'].getTracker().getAttributionCampaignKeyword())
                ]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Returns the attribution referrer timestamp.
     *
     * @memberof MatomoTracker
     */
    getAttributionReferrerTimestamp(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([
                    () => resolve(window['Piwik'].getTracker().getAttributionReferrerTimestamp())
                ]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Returns the attribution referrer URL.
     *
     * @memberof MatomoTracker
     */
    getAttributionReferrerUrl(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([
                    () => resolve(window['Piwik'].getTracker().getAttributionReferrerUrl())
                ]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     *  Returns the User ID string if it was set.
     *
     * @memberof MatomoTracker
     */
    getUserId(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().getUserId())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * @param userId
     * @memberof MatomoTracker
     */
    setUserId(userId: string): void {
        try {
            const args: any[] = [userId];
            this.scope.push(['setUserId', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * @memberof MatomoTracker
     */
    resetUserId(): void {
        try {
            this.scope.push(['resetUserId']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets a custom variable.
     *
     * @param index: Index, the number from 1 to 5 where this custom variable name is stored for the current page view
     * @param name: Name, the name of the variable, for example: Category, Sub-category, UserType
     * @param value: Value, for example: "Sports", "News", "World", "Business", etc.
     * @param scope: Scope of the custom variable, "page" means the custom variable applies to the current page view
     * @memberof MatomoTracker
     */
    setCustomVariable(index: number, name: string, value: string, scope: string): void {
        try {
            const args: any[] = [index, name, value, scope];
            this.scope.push(['setCustomVariable', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Deletes a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    deleteCustomVariable(index: number, scope: string): void {
        try {
            const args: any[] = [index, scope];
            this.scope.push(['deleteCustomVariable', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Retrieves a custom variable.
     *
     * @param index
     * @param scope
     * @memberof MatomoTracker
     */
    getCustomVariable(index: number, scope: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([
                    () => resolve(window['Piwik'].getTracker().getCustomVariable(index, scope))
                ]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
     * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * @memberof MatomoTracker
     */
    storeCustomVariablesInCookie(): void {
        try {
            this.scope.push(['storeCustomVariablesInCookie']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @param customDimensionValue
     * @memberof MatomoTracker
     */
    setCustomDimension(customDimensionId: number, customDimensionValue: string): void {
        try {
            const args: any[] = [customDimensionId, customDimensionValue];
            this.scope.push(['setCustomDimension', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Deletes a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    deleteCustomDimension(customDimensionId: number): void {
        try {
            const args: any[] = [customDimensionId];
            this.scope.push(['deleteCustomDimension', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Retrieve a custom dimension.
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId
     * @memberof MatomoTracker
     */
    getCustomDimension(customDimensionId: number): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([
                    () => resolve(window['Piwik'].getTracker().getCustomDimension(customDimensionId))
                ]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Sets campaign name parameter(s).
     *
     * @param name
     * @memberof MatomoTracker
     */
    setCampaignNameKey(name: string): void {
        try {
            const args: any[] = [name];
            this.scope.push(['setCampaignNameKey', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets campaign keyword parameter(s).
     *
     * @param keyword
     * @memberof MatomoTracker
     */
    setCampaignKeywordKey(keyword: string): void {
        try {
            const args: any[] = [keyword];
            this.scope.push(['setCampaignKeywordKey', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Set to true to attribute a conversion to the first referrer.
     * By default, conversion is attributed to the most recent referrer.
     *
     * @param conversionToFirstReferrer
     * @memberof MatomoTracker
     */
    setConversionAttributionFirstReferrer(conversionToFirstReferrer: boolean): void {
        try {
            const args: any[] = [conversionToFirstReferrer];
            this.scope.push(['setConversionAttributionFirstReferrer', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets the current page view as a product or category page view.
     * When you call setEcommerceView it must be followed by a call to trackPageView to record the product or category page view.
     *
     * @param productSKU
     * @param productName
     * @param categoryName
     * @param price
     * @memberof MatomoTracker
     */
    setEcommerceView(
        productSKU: string,
        productName: string,
        categoryName: string,
        price: number
    ): void {
        try {
            const args: any[] = [productSKU, productName, categoryName, price];
            this.scope.push(['setEcommerceView', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Adds a product into the ecommerce order.Must be called for each product in the order.
     *
     * @param productSKU
     * @param [productName]
     * @param [productCategory]
     * @param [price]
     * @param [quantity]
     * @memberof MatomoTracker
     */
    addEcommerceItem(
        productSKU: string,
        productName?: string,
        productCategory?: string,
        price?: number,
        quantity?: number
    ): void {
        try {
            const args: any[] = [productSKU];
            if (!!productName) {
                args.push(productName);
            }
            if (!!productCategory) {
                args.push(productCategory);
            }
            if (!!price) {
                args.push(price);
            }
            if (!!quantity) {
                args.push(quantity);
            }
            this.scope.push(['addEcommerceItem', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Tracks a shopping cart.Call this javascript function every time a user is adding, updating or deleting a product from the cart.
     *
     * @param grandTotal
     * @memberof MatomoTracker
     */
    trackEcommerceCartUpdate(grandTotal: number): void {
        try {
            const args: any[] = [grandTotal];
            this.scope.push(['trackEcommerceCartUpdate', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Tracks an Ecommerce order, including any ecommerce item previously added to the order.
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * @param orderId
     * @param grandTotal
     * @param [subTotal]
     * @param [tax]
     * @param [shipping]
     * @param [discount]
     * @memberof MatomoTracker
     */
    trackEcommerceOrder(
        orderId: string,
        grandTotal: number,
        subTotal?: number,
        tax?: number,
        shipping?: number,
        discount?: number
    ): void {
        try {
            const args: any[] = [orderId, grandTotal];
            if (!!subTotal) {
                args.push(subTotal);
            }
            if (!!tax) {
                args.push(tax);
            }
            if (!!shipping) {
                args.push(shipping);
            }
            if (!!discount) {
                args.push(discount);
            }
            this.scope.push(['trackEcommerceOrder', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Disables all first party cookies. Existing Matomo cookies for this websites will be deleted on the next page view.
     *
     * @memberof MatomoTracker
     */
    disableCookies(): void {
        try {
            this.scope.push(['disableCookies']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     *
     * @memberof MatomoTracker
     */
    deleteCookies(): void {
        try {
            this.scope.push(['deleteCookies']);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * @memberof MatomoTracker
     */
    hasCookies(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                this.scope.push([() => resolve(window['Piwik'].getTracker().hasCookies())]);
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }

    /**
     * Sets the tracking cookie name prefix.
     * Default prefix is 'pk'.
     *
     * @param prefix
     * @memberof MatomoTracker
     */
    setCookieNamePrefix(prefix: string): void {
        try {
            const args: any[] = [prefix];
            this.scope.push(['setCookieNamePrefix', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets the domain of the tracking cookies.
     * Default is the document domain.
     * If your website can be visited at both www.example.com and example.com, you would use: '.example.com' or '*.example.com'.
     *
     * @param domain
     * @memberof MatomoTracker
     */
    setCookieDomain(domain: string): void {
        try {
            const args: any[] = [domain];
            this.scope.push(['setCookieDomain', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets the path of the tracking cookies.
     * Default is '/'.
     *
     * @param path
     * @memberof MatomoTracker
     */
    setCookiePath(path: string): void {
        try {
            const args: any[] = [path];
            this.scope.push(['setCookiePath', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Set to true to enable the Secure cookie flag on all first party cookies.This should be used when your website is only available
     * under HTTPS so that all tracking cookies are always sent over secure connection.
     *
     * @param secure
     * @memberof MatomoTracker
     */
    setSecureCookie(secure: boolean): void {
        try {
            const args: any[] = [secure];
            this.scope.push(['setSecureCookie', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets the visitor cookie timeout.
     * Default is 13 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    setVisitorCookieTimeout(seconds: number): void {
        try {
            const args: any[] = [seconds];
            this.scope.push(['setVisitorCookieTimeout', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets the referral cookie timeout.
     * Default is 6 months.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    setReferralCookieTimeout(seconds: number): void {
        try {
            const args: any[] = [seconds];
            this.scope.push(['setReferralCookieTimeout', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets the session cookie timeout.
     * Default is 30 minutes.
     *
     * @param seconds
     * @memberof MatomoTracker
     */
    setSessionCookieTimeout(seconds: number): void {
        try {
            const args: any[] = [seconds];
            this.scope.push(['setSessionCookieTimeout', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     *  Adds a click listener to a specific link element. When clicked, Matomo will log the click automatically.
     *
     * @param element
     * @memberof MatomoTracker
     */
    addListener(element: Element): void {
        try {
            const args: any[] = [element];
            this.scope.push(['addListener', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets the request method to either "GET" or "POST". (The default is "GET".)
     * To use the POST request method, either:
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * @param method
     * @memberof MatomoTracker
     */
    setRequestMethod(method: string): void {
        try {
            const args: any[] = [method];
            this.scope.push(['setRequestMethod', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets a function that will process the request content.
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * @param callback
     * @memberof MatomoTracker
     */
    setCustomRequestProcessing(callback: (queryParameters: string) => void): void {
        try {
            const args: any[] = [callback];
            this.scope.push(['setCustomRequestProcessing', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }

    /**
     * Sets request Content-Type header value.
     * Applicable when "POST" request method is used via setRequestMethod.
     *
     * @param contentType
     * @memberof MatomoTracker
     */
    setRequestContentType(contentType: string): void {
        try {
            const args: any[] = [contentType];
            this.scope.push(['setRequestContentType', ...args]);
        } catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
}
