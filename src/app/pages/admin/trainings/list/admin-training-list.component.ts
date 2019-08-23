import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from '../../../../models/entities/training';
import { TrainingHttpService } from '../../../../services/entities/training.http.service';
import { SeoService } from '../../../../services/seo.service';

@Component({
    templateUrl: './admin-training-list.component.html',
    styleUrls: ['./admin-training-list.component.scss'],
})
export class AdminTrainingListComponent implements OnInit {
    public trainings: Training[];

    public constructor(private trainingHttpService: TrainingHttpService,
                       private router: Router,
                       private seoService: SeoService) {
        this.seoService.prependPageTitle('Liste des formations - Formations - Administration');
    }

    ngOnInit(): void {
        this.trainingHttpService
            .readAll()
            .subscribe((trainings) => this.trainings = trainings);
    }

    openEditMode(training: Training) {
        this.router.navigate(['/admin/trainings/create/' + training.TrainingId]);
        return false;
    }
}
