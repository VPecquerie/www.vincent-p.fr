import { TestBed, inject } from '@angular/core/testing';

import { ExperienceHttpService } from './experience.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExperienceHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([ExperienceHttpService], (service: ExperienceHttpService) => {
    expect(service).toBeTruthy();
  }));
});
