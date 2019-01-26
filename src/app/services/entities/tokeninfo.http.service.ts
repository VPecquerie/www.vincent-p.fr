import { CrudHttpService } from '../crud.http.service';
import { TokenInfo } from '../../entities/tokeninfo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
