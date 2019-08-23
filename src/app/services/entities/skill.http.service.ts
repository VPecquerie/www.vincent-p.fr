import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../../models/entities/skill';

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
