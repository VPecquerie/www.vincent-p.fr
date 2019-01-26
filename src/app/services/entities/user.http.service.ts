import { CrudHttpService } from '../crud.http.service';
import { User } from '../../entities/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return User;
    }

    protected getEntityClassName() {
        return 'User';
    }

    public login(data)  {
        return this.create(data);
    }

}
