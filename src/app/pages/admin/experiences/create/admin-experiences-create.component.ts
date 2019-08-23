import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../../../../models/entities/experience';
import { Company } from '../../../../models/entities/company';
import { CompanyHttpService } from '../../../../services/entities/company.http.service';
import { ExperienceHttpService } from '../../../../services/entities/experience.http.service';
import { SeoService } from '../../../../services/seo.service';
import { NotificationService } from '../../../../services/notification.service';
import { ExperienceForm } from '../../../../models/forms/experience.form';
import { DateUtils } from '../../../../utils/date';


@Component({
    templateUrl: './admin-experiences-create.component.html',
    styleUrls: ['./admin-experiences-create.component.scss'],
})
export class AdminExperiencesCreateComponent implements OnInit {

    private id: number;
    public experience: Experience;
    public companies: Company[];
    public createEnterpriseMode = false;

    public experienceForm = ExperienceForm;

    public constructor(private experienceHttpService: ExperienceHttpService,
                       private companyHttpService: CompanyHttpService,
                       private route: ActivatedRoute,
                       private router: Router,
                       private seoService: SeoService,
                       private notificationService: NotificationService) {
        this.seoService.prependPageTitle('Rédaction d\'une experience - Experiences - Administration');
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
                        Start: DateUtils.ToFormStringFormat(this.experience.Start),
                        End: DateUtils.ToFormStringFormat(this.experience.End),
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
        } else {
            this.notificationService.Warning('Formulaire invalide', 'Le contenu du formulaire est invalide.');
            return false;
        }
    }
}
