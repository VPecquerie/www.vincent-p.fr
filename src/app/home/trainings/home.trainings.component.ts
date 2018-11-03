import {Component, OnInit} from '@angular/core';
import {HomeTrainingService} from './home.trainings.service';
import { Training } from '../../entities/training';

@Component({
  selector: 'app-home-trainings',
  templateUrl: './home.trainings.component.html',
  styleUrls: ['./home.trainings.component.scss']
})
export class HomeTrainingComponent implements OnInit {

  public trainings: Training[];

  constructor(private trainingService: HomeTrainingService) { }

  ngOnInit(): void {
    this.trainingService.getTrainings().subscribe(trainings => this.trainings = trainings);
  }

}
