import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ArticleHttpService } from './article.http.service';

describe('ArticleHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([ArticleHttpService], (service: ArticleHttpService) => {
    expect(service).toBeTruthy();
  }));
});
