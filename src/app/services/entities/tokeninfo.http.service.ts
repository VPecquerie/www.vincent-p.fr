import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInfo } from '../../models/entities/tokeninfo';

@Injectable()
export class TokeninfoHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return TokenInfo;
    }

    protected getEntityClassName() {
        return 'TokenInfo';
    }
}
