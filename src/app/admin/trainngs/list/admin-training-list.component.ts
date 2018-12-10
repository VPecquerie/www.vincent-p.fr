import { Component, OnInit } from '@angular/core';
import { Training } from '../../../entities/training';
import { AdminTrainingsService } from '../admin-trainings.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './admin-training-list.component.html',
    styleUrls: ['./admin-training-list.component.scss'],
})
export class AdminTrainingListComponent implements OnInit {
    public trainings: Training[];

    public constructor(private service: AdminTrainingsService, private router: Router) {
    }

    ngOnInit(): void {
        this.service.getTrainings().subscribe((trainings) => this.trainings = trainings);
    }

    openEditMode(training: Training) {
        this.router.navigate(['/admin/trainings/edit/' + training.TrainingId ]);
        return false;
    }
}
