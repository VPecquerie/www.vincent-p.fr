import { inject, TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ContactService],
            imports: [RouterTestingModule, HttpClientTestingModule],
        });
    });

    it('should be created', inject([ContactService], (service: ContactService) => {
        expect(service).toBeTruthy();
    }));
});
