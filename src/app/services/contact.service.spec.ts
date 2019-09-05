import { inject, TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ContactService', () => {

    let service: ContactService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ContactService],
            imports: [RouterTestingModule, HttpClientTestingModule],
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(ContactService);

    });

    it('should be created', inject([ContactService], (service: ContactService) => {
        expect(service).toBeTruthy();
    }));

    it('should be succeed', () => {

        service.saveForm({
            Message: 'Message',
            Mail: 'test@test.fr',
            Name: 'Test',
            Phone: '0102030405',
        }).then(() => {
            expect(true).toBeTruthy();
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Contact, 'Post Contact Message');
        expect(req.request.method).toBe('POST');

        httpMock.verify();

    });
});
