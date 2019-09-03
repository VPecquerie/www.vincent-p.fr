import { inject, TestBed } from '@angular/core/testing';
import { SkillGroupHttpService } from './skill-group.http.service';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SkillGroup } from '../../models/entities/skill.group';

describe('SkillGroupHttpService', () => {

    let service: SkillGroupHttpService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SkillGroupHttpService],
            imports: [
                HttpClientTestingModule,
            ],
        });

        service = TestBed.get(SkillGroupHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([SkillGroupHttpService], (service: SkillGroupHttpService) => {
        expect(service).toBeTruthy();
    }));


    it('ReadAll should return an array of SkillGroups', () => {

        service.readAll().subscribe((data: SkillGroup[]) => {
            expect(data.length).toBe(2);
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.SkillGroup, 'Get the Skill Groups');
        req.flush([{
            'SkillGroupId': 1,
            'Name': 'Skill 1',
            'Icon': 'fa-desktop',
        }, {
            'SkillGroupId': 2,
            'Name': 'Skill 2',
            'Icon': 'fa-desktop',
        }]);

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    it('ReadOne(1) should return a SkillGroup with id:1', () => {

        service.readOne(1).subscribe((skillGroup: SkillGroup) => {
            expect(skillGroup.SkillGroupId).toBe(1);
            expect(skillGroup.Name).toBe('Group 1');
            expect(skillGroup.Icon).toBe('fa-desktop');
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.SkillGroup + '/' + 1, 'Get the first SkillGroup');
        req.flush({
            'SkillGroupId': 1,
            'Name': 'Group 1',
            'Icon': 'fa-desktop',
        });

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    afterAll(() => {
        service.dispose();
    });
});
