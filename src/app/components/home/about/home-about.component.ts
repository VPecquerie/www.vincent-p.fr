import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextEntity } from '../../../models/entities/text.entity';
import { TextEntityHttpService } from '../../../services/entities/text.entity.http.service';
import { environment } from '../../../../environments/environment';
import { AbstractComponent } from '../../abstract.component';


@Component({
    selector: 'app-home-about',
    templateUrl: './home-about.component.html',
    styleUrls: ['./home-about.component.scss'],
})
export class HomeAboutComponent extends AbstractComponent implements OnInit, OnDestroy {


    public introduction: TextEntity = null;
    public rootUrl: string;

    constructor(private textEntityHttpService: TextEntityHttpService) {
        super();
        this.rootUrl = environment.app.url;
    }

    ngOnInit(): void {
        this.subscriptions.push(this.textEntityHttpService
            .readOne('Introduction')
            .subscribe((text) => this.introduction = text));
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.textEntityHttpService.dispose();
    }
}
