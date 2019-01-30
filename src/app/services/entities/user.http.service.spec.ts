import { TestBed, inject } from '@angular/core/testing';

import { UserHttpService } from './user.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([UserHttpService], (service: UserHttpService) => {
    expect(service).toBeTruthy();
  }));
});
