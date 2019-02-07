import { CrudHttpService } from '../crud.http.service';
import { Company } from '../../entities/company';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyHttpService extends CrudHttpService {


    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return Company;
    }

    protected getEntityClassName() {
        return 'Company';
    }
}
