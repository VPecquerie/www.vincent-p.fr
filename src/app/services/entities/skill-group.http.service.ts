import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillGroup } from '../../models/entities/skill.group';

@Injectable()
export class SkillGroupHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return SkillGroup;
    }

    protected getEntityClassName() {
        return 'SkillGroup';
    }
}
