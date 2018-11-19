import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminExperiencesService } from '../admin-experiences.service';
import { Experience } from '../../../entities/experience';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    templateUrl: './admin-experiences-list.component.html',
    styleUrls: ['./admin-experiences-list.component.scss'],
})
export class AdminExperiencesListComponent implements OnInit, OnDestroy {

    private suscription: Subscription;
    public experiences: Experience[];

    constructor(private service: AdminExperiencesService, private router: Router) {
    }

    ngOnInit(): void {
        this.getExperiences();
    }

    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }

    getExperiences() {
        this.suscription = this.service.getExperiences().subscribe(experiences => this.experiences = experiences);
    }

    delete(experience): boolean {
        const self = this;
        this.service.deleteExperience(experience.ExperienceId).then(() => {

            const index = _.indexOf(this.experiences, experience);
            self.experiences.splice(index, 1);
            self.router.navigate(['/admin/experiences']);
        });

        return false;
    }


}
