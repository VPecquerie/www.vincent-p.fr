import { inject, TestBed } from '@angular/core/testing';
import { TextEntityHttpService } from './text.entity.http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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

    it('ReadOne(Introduction) should return a text with slug:Introduction', () => {

        service.readOne('Introduction').subscribe((text: TextEntity) => {
            expect(text.Slug).toBe('Introduction');
            expect(text.Content).toBe('Content');
        });


        const req = httpMock.expectOne(environment.api.url + environment.api.entities.TextEntity + '/Introduction', 'Get the Text Introduction');
        req.flush({
            Slug: 'Introduction',
            Content: 'Content'
        });

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });
});
