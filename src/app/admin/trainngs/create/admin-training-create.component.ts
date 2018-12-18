import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminTrainingsService } from '../admin-trainings.service';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from '../../../entities/training';

@Component({
    templateUrl: './admin-training-create.component.html',
    styleUrls: ['./admin-training-create.component.scss'],
})
export class AdminTrainingCreateComponent implements OnInit {

    private id: number;
    private training: Training;
    public trainingForm = new FormGroup({
        Title: new FormControl('', [Validators.required]),
        Description: new FormControl('', [Validators.required]),
        Begin: new FormControl('', [Validators.required]),
        End: new FormControl('', [])
    });


    constructor(private service: AdminTrainingsService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            if (this.id !== null && this.id !== undefined) {
                this.service.getTraining(this.id).subscribe(data => {
                    this.training = new Training(data);
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
                this.service.createTraining(this.trainingForm.getRawValue()).then(() => {
                    self.router.navigate(['/admin/trainings']);
                });
            } else {
                this.service.updateTraining(this.id, this.trainingForm.getRawValue()).then(() => {
                    self.router.navigate(['/admin/trainings']);
                });
            }
        }
    }
}
