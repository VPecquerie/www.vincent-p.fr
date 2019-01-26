import { CrudHttpService } from '../crud.http.service';
import { Training } from '../../entities/training';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrainingHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return Training;
    }

    protected getEntityClassName() {
        return 'Training';
    }
}
