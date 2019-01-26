import { Component, OnDestroy, OnInit } from '@angular/core';
import { Experience } from '../../../entities/experience';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';
import { ExperienceHttpService } from '../../../services/entities/experience.http.service';

@Component({
    templateUrl: './admin-experiences-list.component.html',
    styleUrls: ['./admin-experiences-list.component.scss'],
})
export class AdminExperiencesListComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    public experiences: Experience[];

    constructor(private experienceHttpService: ExperienceHttpService, private router: Router) {
    }

    ngOnInit(): void {
        this.getExperiences();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getExperiences() {
        this.subscription = this.experienceHttpService
            .readAll()
            .subscribe(experiences => this.experiences = experiences);
    }

    delete(experience): boolean {
        const self = this;
        this.experienceHttpService.delete(experience.ExperienceId).subscribe(() => {

            const index = _.indexOf(this.experiences, experience);
            self.experiences.splice(index, 1);
            self.router.navigate(['/admin/experiences']);
        });
        return false;
    }


}
