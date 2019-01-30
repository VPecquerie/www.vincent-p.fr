import { TestBed, inject } from '@angular/core/testing';

import { SkillgroupHttpService } from './skillgroup.http.service';
import { HttpClientModule } from '@angular/common/http';

describe('SkillgroupHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillgroupHttpService],
        imports: [
            HttpClientModule,
        ]
    });
  });

  it('should be created', inject([SkillgroupHttpService], (service: SkillgroupHttpService) => {
    expect(service).toBeTruthy();
  }));
});
