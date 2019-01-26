import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../entities/experience';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../../entities/company';
import * as moment from 'moment';
import { CreateExperienceForm } from './admin-experiences-create.form-group.component';
import { ExperienceHttpService } from '../../../services/entities/experience.http.service';
import { CompanyHttpService } from '../../../services/entities/company.http.service';

@Component({
    templateUrl: './admin-experiences-create.component.html',
    styleUrls: ['./admin-experiences-create.component.scss'],
})
export class AdminExperiencesCreateComponent implements OnInit {

    private id: number;
    public experience: Experience;
    public companies: Company[];
    public createEnterpriseMode = false;

    public experienceForm = CreateExperienceForm;

    public constructor(private experienceHttpService: ExperienceHttpService,
                       private companyHttpService: CompanyHttpService,
                       private route: ActivatedRoute,
                       private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            if (this.id !== null && this.id !== undefined) {
                this.experienceHttpService.readOne(this.id).subscribe(experience => {
                    this.experience = experience;
                    this.experienceForm.setValue({
                        Title: this.experience.Title,
                        Description: this.experience.Description,
                        Start: moment(this.experience.Start).format('YYYY-MM-DD'),
                        End: moment(this.experience.End).format('YYYY-MM-DD'),
                        CompanyId: this.experience.Company != null ? this.experience.Company.CompanyId : -1,
                        CompanyAdd: {
                            Name: null,
                            Location: null,
                            Logo: null,
                        },
                    });
                });
            }

            this.companyHttpService
                .readAll()
                .subscribe(companies => this.companies = companies);
        });
    }

    save() {
        if (this.experienceForm.valid) {
            const self = this;
            if (this.id == null) {
                this.experienceHttpService.create(this.experienceForm.getRawValue()).subscribe(() => {
                    self.router.navigate(['/admin/experiences']);
                });
            } else {
                this.experienceHttpService.update(this.id, this.experienceForm.getRawValue()).subscribe(() => {
                    self.router.navigate(['/admin/experiences']);
                });
            }
        }
    }
}
