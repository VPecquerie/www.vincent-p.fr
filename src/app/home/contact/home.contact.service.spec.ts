import { TestBed, inject } from '@angular/core/testing';

import { HomeContactService } from './home.contact.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeContactService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HomeContactService],
            imports: [RouterTestingModule, HttpClientTestingModule],
        });
    });

    it('should be created', inject([HomeContactService], (service: HomeContactService) => {
        expect(service).toBeTruthy();
    }));
});
