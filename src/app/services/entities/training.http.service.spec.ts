import { TestBed, inject } from '@angular/core/testing';

import { TrainingHttpService } from './training.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('TrainingHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([TrainingHttpService], (service: TrainingHttpService) => {
    expect(service).toBeTruthy();
  }));
});
