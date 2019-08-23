import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../../models/entities/experience';

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
