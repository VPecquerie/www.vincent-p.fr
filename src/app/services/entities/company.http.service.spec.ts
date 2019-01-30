import { TestBed, inject } from '@angular/core/testing';

import { CompanyHttpService } from './company.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('CompanyHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([CompanyHttpService], (service: CompanyHttpService) => {
    expect(service).toBeTruthy();
  }));
});
