import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Experience } from '../../../entities/experience';
import { AdminExperiencesService } from '../admin-experiences.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../../entities/company';
import * as moment from 'moment';

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
        End: new FormControl('', []),
        CompanyId: new FormControl(''),
        CompanyAdd: new FormGroup({
            Name: new FormControl('', []),
            Location: new FormControl('', []),
            Logo: new FormControl('', [])
        }),
    });

    public constructor(private service: AdminExperiencesService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.service.getExperience(this.id).subscribe(data => {

                this.experience = new Experience(data);
                this.experienceForm.setValue({
                    Title: this.experience.Title,
                    Description: this.experience.Description,
                    Start: moment(this.experience.Start).format('YYYY-MM-DD'),
                    End: moment(this.experience.End).format('YYYY-MM-DD'),
                    CompanyId: this.experience.Company != null ? this.experience.Company.CompanyId : -1,
                    CompanyAdd: {
                        Name: null,
                        Location: null,
                        Logo: null
                    }
                });
            });
            this.service.getCompanies().subscribe(companies => this.companies = companies);
        });
    }

    save() {
        if (this.experienceForm.valid) {
            const self = this;
            if (this.id == null) {
                this.service.createExperience(this.experienceForm.getRawValue()).then(() => {
                    self.router.navigate(['/admin/experiences']);
                });
            } else {
                this.service.updateExperience(this.id, this.experienceForm.getRawValue()).then(() => {
                    self.router.navigate(['/admin/experiences']);
                });
            }
        }
    }
}
