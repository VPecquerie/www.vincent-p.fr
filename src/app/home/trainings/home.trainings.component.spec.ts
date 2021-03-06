import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrainingsComponent } from './home.trainings.component';
import { TextEntityHttpService } from '../../services/entities/text.entity.http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { TrainingHttpService } from '../../services/entities/training.http.service';

describe('HomeTrainingsComponent', () => {
    let component: HomeTrainingsComponent;
    let fixture: ComponentFixture<HomeTrainingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeTrainingsComponent],
            providers: [TrainingHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeTrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
