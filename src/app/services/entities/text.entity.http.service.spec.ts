import { TestBed, inject } from '@angular/core/testing';

import { TextEntityHttpService } from './text.entity.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('TextEntityHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextEntityHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([TextEntityHttpService], (service: TextEntityHttpService) => {
    expect(service).toBeTruthy();
  }));
});
