import { CrudHttpService } from '../crud.http.service';
import { Skillgroup } from '../../entities/skillgroup';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkillgroupHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return Skillgroup;
    }

    protected getEntityClassName() {
        return 'Skillgroup';
    }
}
