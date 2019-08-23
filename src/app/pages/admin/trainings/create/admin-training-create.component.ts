import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from '../../../../models/entities/training';
import { DefaultTrainingFormValues, TrainingForm } from '../../../../models/forms/training.form';
import { TrainingHttpService } from '../../../../services/entities/training.http.service';
import { SeoService } from '../../../../services/seo.service';
import { DateUtils } from '../../../../utils/date';


@Component({
    templateUrl: './admin-training-create.component.html',
})
export class AdminTrainingCreateComponent implements OnInit {

    private id: number;
    private training: Training;
    public trainingForm = TrainingForm;

    constructor(private trainingHttpService: TrainingHttpService,
                private route: ActivatedRoute,
                private router: Router,
                private seoService: SeoService) {
        this.seoService.prependPageTitle('Rédaction d\'une formation - Formations - Administration');
    }

    ngOnInit(): void {
        this.trainingForm.setValue(DefaultTrainingFormValues);
        this.route.params.subscribe(params => {
            this.id = params.id;
            if (this.id !== null && this.id !== undefined) {
                this.trainingHttpService.readOne(this.id).subscribe(training => {
                    this.training = training;
                    this.trainingForm.setValue({
                        Title: this.training.Title,
                        Description: this.training.Description,
                        Begin: DateUtils.ToFormStringFormat(this.training.Begin),
                        End: DateUtils.ToFormStringFormat(this.training.End)
                    });
                });
            }
        });
    }


    save() {
        if (this.trainingForm.valid) {
            const self = this;
            if (this.id == null) {
                this.trainingHttpService.create(this.trainingForm.getRawValue()).subscribe(() => {
                    self.router.navigate(['/admin/trainings']);
                });
            } else {
                this.trainingHttpService.update(this.id, this.trainingForm.getRawValue()).subscribe(() => {
                    self.router.navigate(['/admin/trainings']);
                });
            }
        }
    }
}
