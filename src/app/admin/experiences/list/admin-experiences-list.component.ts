import { Component, OnInit } from '@angular/core';
import { AdminExperiencesService } from '../admin-experiences.service';
import { Experience } from '../../../entities/experience';

@Component({
    templateUrl: './admin-experiences-list.component.html',
    styleUrls: ['./admin-experiences-list.component.scss']
})
export class AdminExperiencesListComponent implements OnInit {

    private experiences: Experience[];

    constructor(private service: AdminExperiencesService) { }

    ngOnInit(): void {
        this.service.getExperiences().subscribe(experiences => this.experiences = experiences);
    }

    openEditMode(): void {
        
    }
}
