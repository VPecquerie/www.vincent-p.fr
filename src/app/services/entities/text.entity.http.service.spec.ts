import { TestBed, inject } from '@angular/core/testing';
import { TextEntityHttpService } from './text.entity.http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Company } from '../../models/entities/company';
import { environment } from '../../../environments/environment';
import { TextEntity } from '../../models/entities/text.entity';

describe('TextEntityHttpService', () => {

    let service: TextEntityHttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TextEntityHttpService],
            imports: [HttpClientTestingModule],
        });

        service = TestBed.get(TextEntityHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([TextEntityHttpService], (service: TextEntityHttpService) => {
        expect(service).toBeTruthy();
    }));

    it('ReadAll should return an array of Texts', () => {

        service.readAll().subscribe((data: TextEntity[]) => {
            expect(data.length).toBe(2);
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.TextEntity, 'Get the Texts');
        req.flush([{
            'TextId': '1',
            'Creator': null,
            'Slug': 'Introduction',
            'Content': 'Contenu 1',
            'Updated': '2019-07-06T09:50:55.9633333',
            'Created': '2018-01-01T00:00:00',
            'IsPublished': true,
        }, {
            'TextId': '2',
            'Creator': null,
            'Slug': 'test-2',
            'Content': 'Contenu 2',
            'Updated': '2019-07-06T09:50:55.9633333',
            'Created': '2018-01-01T00:00:00',
            'IsPublished': true,
        }]);

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    /*
    @TODO: finir la fonction.
    it('ReadOne(1) should return a text with slug:1', () => {

        service.readOne(1).subscribe((company: Company) => {
            expect(company.CompanyId).toBe(1);
            expect(company.Name).toBe('Company');
            expect(company.Location).toBe('Rouen');
            expect(company.Logo).toBe('/test.png');
        });


        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Company + '/' + 1, 'Get the first Text');
        req.flush({
            CompanyId: 1,
            Name: 'Company',
            Location: 'Rouen',
            Logo: '/test.png',
        });

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });*/
});
