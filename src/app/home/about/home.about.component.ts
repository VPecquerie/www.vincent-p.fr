import { Component, OnInit } from '@angular/core';
import { TextEntity } from '../../entities/text.entity';
import { environment } from '../../../environments/environment';
import { TextEntityHttpService } from '../../services/entities/text.entity.http.service';

@Component({
    selector: 'app-home-about',
    templateUrl: './home.about.component.html',
    styleUrls: ['./home.about.component.scss'],
})
export class HomeAboutComponent implements OnInit {
    public introduction: TextEntity = null;
    public rootUrl: string;

    constructor(private textEntityHttpService: TextEntityHttpService) {
        this.rootUrl = environment.app.url;
    }

    ngOnInit(): void {
        this.textEntityHttpService
            .readOne('Introduction')
            .subscribe((text) => this.introduction = text);
    }
}
