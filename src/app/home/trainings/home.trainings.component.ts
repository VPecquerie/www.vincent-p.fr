import { Component, OnInit } from '@angular/core';
import { Training } from '../../entities/training';
import { TrainingHttpService } from '../../services/entities/training.http.service';

@Component({
    selector: 'app-home-trainings',
    templateUrl: './home.trainings.component.html',
    styleUrls: ['./home.trainings.component.scss'],
})
export class HomeTrainingComponent implements OnInit {

    public trainings: Training[];

    constructor(private trainingService: TrainingHttpService) {
    }

    ngOnInit(): void {
        this.trainingService
            .readAll()
            .subscribe(trainings => this.trainings = trainings);
    }

}
