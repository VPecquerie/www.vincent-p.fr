import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from '../../../entities/training';
import { TrainingForm } from './admin-training-create.form-group';
import { TrainingHttpService } from '../../../services/entities/training.http.service';

import * as moment from 'moment';

@Component({
    templateUrl: './admin-training-create.component.html',
    styleUrls: ['./admin-training-create.component.scss'],
})
export class AdminTrainingCreateComponent implements OnInit {

    private id: number;
    private training: Training;
    public trainingForm = TrainingForm;

    constructor(private trainingHttpService: TrainingHttpService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            if (this.id !== null && this.id !== undefined) {
                this.trainingHttpService.readOne(this.id).subscribe(training => {
                    this.training = training;
                    this.trainingForm.setValue({
                        Title: this.training.Title,
                        Description: this.training.Description,
                        Begin: moment(this.training.Begin).format('YYYY-MM-DD'),
                        End: moment(this.training.End).format('YYYY-MM-DD')
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
