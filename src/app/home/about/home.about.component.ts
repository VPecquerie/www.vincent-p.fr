import { Component, OnInit } from '@angular/core';
import { TextEntity } from '../../entities/text.entity';
import { HomeAboutService } from './home.about.service.component';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-home-about',
    templateUrl: './home.about.component.html',
    styleUrls: ['./home.about.component.scss'],
})
export class HomeAboutComponent implements OnInit {
    public introduction: TextEntity = null;
    public rootUrl: string;

    constructor(private homeAboutService: HomeAboutService) {
        this.rootUrl = environment.app.url;
    }

    ngOnInit(): void {
        const self = this;
        this.homeAboutService.getIntroduction().subscribe((text) => this.introduction = new TextEntity(text));
    }
}
