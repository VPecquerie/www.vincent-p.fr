import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Experience } from '../../../entities/experience';
import { AdminExperiencesService } from '../admin-experiences.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../../entities/company';

@Component({
    templateUrl: './admin-experiences-create.component.html',
    styleUrls: ['./admin-experiences-create.component.scss'],
})
export class AdminExperiencesCreateComponent implements OnInit {

    private id: number;
    public experience: Experience;
    public companies: Company[];
    public createEnterpriseMode = false;

    public experienceForm = new FormGroup({
        Title: new FormControl('', [Validators.required]),
        Description: new FormControl('', [Validators.required]),
        Start: new FormControl('', [Validators.required]),
        End: new FormControl('', [Validators.required]),
        Company: new FormControl(''),
        CompanyAdd: new FormGroup({
            Name: new FormControl('', []),
            Location: new FormControl('', []),
            Logo: new FormControl('', [])
        }),
    });

    public constructor(private service: AdminExperiencesService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.service.getExperience(this.id).subscribe(experience => this.experience = experience);
            this.service.getCompanies().subscribe(companies => this.companies = companies);
        });
    }

    save() {
        if (this.experienceForm.valid) {
            if (this.id == null) {
                this.service.createExperience(this.experienceForm.getRawValue());
            } else {
                this.service.updateExperience(this.id, this.experienceForm.getRawValue());
            }
        }
    }
}
