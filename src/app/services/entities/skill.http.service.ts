import { CrudHttpService } from '../crud.http.service';
import { Skill } from '../../entities/skill';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkillHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return Skill;
    }

    protected getEntityClassName() {
        return 'Skill';
    }
}
