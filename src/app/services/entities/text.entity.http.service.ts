import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TextEntity } from '../../models/entities/text.entity';

@Injectable()
export class TextEntityHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return TextEntity;
    }

    protected getEntityClassName() {
        return 'TextEntity';
    }
}
