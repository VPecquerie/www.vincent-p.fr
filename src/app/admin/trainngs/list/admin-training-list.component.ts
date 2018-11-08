import { Component, OnInit } from '@angular/core';
import { Training } from '../../../entities/training';
import { AdminTrainingsService } from '../admin-trainings.service';

@Component({
    templateUrl: './admin-training-list.component.html',
    styleUrls: ['./admin-training-list.component.scss'],
})
export class AdminTrainingListComponent implements OnInit {
    public trainings: Training[];

    public constructor(private service: AdminTrainingsService) { }

    ngOnInit(): void {
        this.service.getTrainings().subscribe((trainings) => this.trainings = trainings);
    }
}
