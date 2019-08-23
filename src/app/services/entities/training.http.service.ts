import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from '../../models/entities/training';

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
