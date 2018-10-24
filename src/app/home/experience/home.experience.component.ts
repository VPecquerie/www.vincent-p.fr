import { Component, OnInit } from '@angular/core';
import { HomeExperienceService } from './home.experience.service';
import { Experience } from '../../entities/experience';

@Component({
    selector: 'app-home-experience',
    templateUrl: './home.experience.component.html',
    styleUrls: ['./home.experience.component.scss'],
})
export class HomeExperienceComponent implements OnInit {
    public experiences: Experience[];

    constructor(private experienceService: HomeExperienceService) {}

    ngOnInit(): void {
        const self = this;
        this.experienceService
            .getExperiences()
            .then((experiences: Experience[]) => {
                self.experiences = experiences;
            })
            .catch(() => {
                self.experiences = [];
            });
    }
}