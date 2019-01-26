import { CrudHttpService } from '../crud.http.service';
import { Experience } from '../../entities/experience';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExperienceHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return Experience;
    }

    protected getEntityClassName() {
        return 'Experience';
    }
}
