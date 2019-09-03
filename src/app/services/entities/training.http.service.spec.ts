import { inject, TestBed } from '@angular/core/testing';

import { TrainingHttpService } from './training.http.service';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Training } from '../../models/entities/training';

describe('TrainingHttpService', () => {

    let service: TrainingHttpService;
    let httpMock: HttpTestingController;


    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TrainingHttpService],
            imports: [HttpClientTestingModule],
        });

        service = TestBed.get(TrainingHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([TrainingHttpService], (service: TrainingHttpService) => {
        expect(service).toBeTruthy();
    }));


    it('ReadAll should return an array of Trainings', () => {

        service.readAll().subscribe((data: Training[]) => {
            expect(data.length).toBe(2);
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Training, 'Get the Trainings');
        req.flush([{

        }, {

        }]);

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    it('ReadOne(1) should return a text with id:1', () => {

        service.readOne(1).subscribe((training: Training) => {
            expect(training.TrainingId).toBe(1);
            expect(training.Description).toBe('Description');
        });


        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Training + '/1', 'Get the Training #1');
        req.flush({
            TrainingId: 1,
            Description: 'Description'
        });

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    afterAll(() => {
        service.dispose();
    });
});
