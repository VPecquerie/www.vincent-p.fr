import { inject, TestBed } from '@angular/core/testing';

import { CompanyHttpService } from './company.http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Company } from '../../models/entities/company';
import { environment } from '../../../environments/environment';

describe('CompanyHttpService', () => {

    let service: CompanyHttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CompanyHttpService],
        });

        service = TestBed.get(CompanyHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([CompanyHttpService], (httpService: CompanyHttpService) => {
        expect(httpService).toBeTruthy();
    }));

    it('ReadAll should return an array of companies', () => {

        service.readAll().subscribe((data: Company[]) => {
            expect(data.length).toBe(2);
        });


        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Company, 'Get the companies');
        req.flush([{
            CompanyId: 1,
            Name: 'Company',
            Location: 'Rouen',
            Logo: '/test.png',
        }, {
            CompanyId: 2,
            Name: 'Company 2',
            Location: 'Rouen',
            Logo: '/test.png',
        }]);

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    it('ReadOne(1) should return a company with id:1', () => {

        service.readOne(1).subscribe((company: Company) => {
            expect(company.CompanyId).toBe(1);
            expect(company.Name).toBe('Company');
            expect(company.Location).toBe('Rouen');
            expect(company.Logo).toBe('/test.png');
        });


        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Company + '/' + 1, 'Get the first company');
        req.flush({
            CompanyId: 1,
            Name: 'Company',
            Location: 'Rouen',
            Logo: '/test.png',
        });

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    afterAll(() => {
        service.dispose();
    });
});
