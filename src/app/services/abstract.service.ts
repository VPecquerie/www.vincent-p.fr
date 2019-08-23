import { Subscription } from 'rxjs';

export abstract class Service {
    protected subscriptions: Subscription[] = [];

    /**
     * This method will be called from component to clean nested services subscription.
     */
    dispose(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
