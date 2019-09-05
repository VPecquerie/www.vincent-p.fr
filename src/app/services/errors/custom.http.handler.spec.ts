import { TestBed, inject } from '@angular/core/testing';

import { CustomHttpHandlerService } from './custom.http.handler.service';
import { UserService } from '../user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('CustomHttpHandlerService', () => {

    let handler: CustomHttpHandlerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService, CustomHttpHandlerService],
            imports: [RouterTestingModule, HttpClientTestingModule],
        });

        handler = TestBed.get(CustomHttpHandlerService);
    });

    it('should be created', inject([CustomHttpHandlerService], (service: CustomHttpHandlerService) => {
        expect(service).toBeTruthy();
    }));

    it('should return good counter', inject([CustomHttpHandlerService], (service: CustomHttpHandlerService) => {
        CustomHttpHandlerService.onLoad.subscribe((value) => {
            expect(value).toBe(4);
        });
        service.setNumberOfQueries(4);
    }));

});
