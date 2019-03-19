import { Component, OnInit } from '@angular/core';
import { Experience } from '../../entities/experience';
import { ExperienceHttpService } from '../../services/entities/experience.http.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-home-experience',
    templateUrl: './home.experience.component.html',
    styleUrls: ['./home.experience.component.scss'],
})
export class HomeExperienceComponent implements OnInit {
    public experiences: Experience[];

    constructor(private experienceHttpService: ExperienceHttpService) {
    }

    ngOnInit(): void {
        this.experienceHttpService.readAll()
            .subscribe(experiences => {
                this.experiences = _.orderBy(experiences, ['Start'], ['desc']);
            });
    }
}
