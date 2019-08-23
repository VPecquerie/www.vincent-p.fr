import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../models/entities/company';

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
