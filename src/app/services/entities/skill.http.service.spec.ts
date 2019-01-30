import { TestBed, inject } from '@angular/core/testing';

import { SkillHttpService } from './skill.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('SkillHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([SkillHttpService], (service: SkillHttpService) => {
    expect(service).toBeTruthy();
  }));
});
