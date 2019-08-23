import { inject, TestBed } from '@angular/core/testing';

import { SkillHttpService } from './skill.http.service';
import { environment } from '../../../environments/environment';
import { Skill } from '../../models/entities/skill';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SkillHttpService', () => {

    let service: SkillHttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SkillHttpService],
            imports: [
                HttpClientTestingModule,
            ],
        });

        service = TestBed.get(SkillHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([SkillHttpService], (service: SkillHttpService) => {
        expect(service).toBeTruthy();
    }));

    it('ReadAll should return an array of skills', () => {

        service.readAll().subscribe((data: Skill[]) => {
            expect(data.length).toBe(2);
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Skill, 'Get the skills');
        req.flush([{
            'SkillId': 1,
            'Name': 'Skill 1',
            'Level': 12,
        }, {
            'SkillId': 2,
            'Name': 'Skill 2',
            'Level': 99,
        }]);

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    it('ReadOne(1) should return a skill with id:1', () => {

        service.readOne(1).subscribe((skill: Skill) => {
            expect(skill.SkillId).toBe(1);
            expect(skill.Name).toBe('Skill 1');
            expect(skill.Level).toBe(12);
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Skill + '/' + 1, 'Get the first skill');
        req.flush({
            'SkillId': 1,
            'Name': 'Skill 1',
            'Level': 12,
        });

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });
});
