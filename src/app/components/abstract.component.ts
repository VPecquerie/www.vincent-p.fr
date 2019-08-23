import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export abstract class AbstractComponent implements OnDestroy {
    protected subscriptions: Subscription[] = [];

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
