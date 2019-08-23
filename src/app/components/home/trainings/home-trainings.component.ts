import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrainingHttpService } from '../../../services/entities/training.http.service';
import { Training } from '../../../models/entities/training';
import { AbstractComponent } from '../../abstract.component';

@Component({
    selector: 'app-home-trainings',
    templateUrl: './home-trainings.component.html',
    styleUrls: ['./home-trainings.component.scss'],
})
export class HomeTrainingsComponent extends AbstractComponent implements OnInit, OnDestroy {

    public trainings: Training[];

    constructor(private trainingService: TrainingHttpService) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions.push(this.trainingService
            .readAll()
            .subscribe(trainings => this.trainings = trainings));
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.trainingService.dispose();
    }
}
