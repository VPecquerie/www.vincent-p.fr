import { CrudHttpService } from '../crud.http.service';
import { TextEntity } from '../../entities/text.entity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
