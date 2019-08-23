import { Component, OnDestroy, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Experience } from '../../../models/entities/experience';
import { ExperienceHttpService } from '../../../services/entities/experience.http.service';
import { AbstractComponent } from '../../abstract.component';

@Component({
    selector: 'app-home-experiences',
    templateUrl: './home-experiences.component.html',
    styleUrls: ['./home-experiences.component.scss'],
})
export class HomeExperiencesComponent extends AbstractComponent implements OnInit, OnDestroy {
    public experiences: Experience[];

    constructor(private experienceHttpService: ExperienceHttpService) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions.push(this.experienceHttpService.readAll()
            .subscribe(experiences => {
                this.experiences = _.orderBy(experiences, ['Start'], ['desc']);
            }));
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.experienceHttpService.dispose();
    }
}
