import { inject, TestBed } from '@angular/core/testing';

import { ExperienceHttpService } from './experience.http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { Experience } from '../../models/entities/experience';

describe('ExperienceHttpService', () => {

    let service: ExperienceHttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ExperienceHttpService],
            imports: [
                HttpClientTestingModule,
            ],
        });

        service = TestBed.get(ExperienceHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([ExperienceHttpService], (service: ExperienceHttpService) => {
        expect(service).toBeTruthy();
    }));

    it('ReadAll should return an array of Experiences', () => {

        service.readAll().subscribe((data: Experience[]) => {
            expect(data.length).toBe(3);
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Experience, 'Get all experiences');
        expect(req.request.method).toBe('GET');

        req.flush([
            {
                'ExperienceId': 1,
                'Company': {
                    'CompanyId': 1,
                    'Name': 'Company',
                    'Location': 'Rouen',
                    'Logo': 'img.png',
                },
                'Title': 'Job Title 1',
                'Description': 'Job description 1',
                'Start': '2013-01-01T00:00:00',
                'End': '2013-01-01T00:00:00',
            },
            {
                'ExperienceId': 2,
                'Company': {
                    'CompanyId': 2,
                    'Name': 'Company 2',
                    'Location': 'Rouen',
                    'Logo': 'img.png',
                },
                'Title': 'Job Title 2',
                'Description': 'Job description 2',
                'Start': '2013-01-01T00:00:00',
                'End': '2013-01-01T00:00:00',
            },
            {
                'ExperienceId': 3,
                'Company': {
                    'CompanyId': 3,
                    'Name': 'Company 3',
                    'Location': 'Rouen',
                    'Logo': 'img.png',
                },
                'Title': 'Job Title 3',
                'Description': 'Job description 3',
                'Start': '2013-01-01T00:00:00',
                'End': '2013-01-01T00:00:00',
            },
        ]);
        httpMock.verify();
    });

    it('ReadOne(1) should return an Experience with ID 1', () => {

        service.readOne(1).subscribe((data: Experience) => {
            expect(data.ExperienceId).toBe(1);
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Experience + '/1', 'Get One experiences');

        expect(req.request.method).toBe('GET');
        req.flush({
            'ExperienceId': 1,
            'Company': {
                'CompanyId': 1,
                'Name': 'Company',
                'Location': 'Rouen',
                'Logo': 'img.png',
            },
            'Title': 'Job Title 1',
            'Description': 'Job description 1',
            'Start': '2013-01-01T00:00:00',
            'End': '2013-01-01T00:00:00',
        });

        httpMock.verify();
    });

});
