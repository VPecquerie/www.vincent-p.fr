import { TestBed, inject } from '@angular/core/testing';

import { TokeninfoHttpService } from './tokeninfo.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('TokeninfoHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokeninfoHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([TokeninfoHttpService], (service: TokeninfoHttpService) => {
    expect(service).toBeTruthy();
  }));
});
