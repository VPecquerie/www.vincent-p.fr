import { TestBed, inject } from '@angular/core/testing';

import { CustomHttpHandlerService } from './custom.http.handler.service';
import { UserService } from '../user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomHttpHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, CustomHttpHandlerService],
        imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([CustomHttpHandlerService], (service: CustomHttpHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
