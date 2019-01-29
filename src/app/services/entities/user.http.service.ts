import { CrudHttpService } from '../crud.http.service';
import { User } from '../../entities/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import {Deserialize, Serialize} from 'cerialize';
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
        const url = environment.api.url + environment.api.entities.Users.login;
        const jsonData = Serialize(data);
        return this.http.post(url, jsonData).pipe(
            map(result => Deserialize(result, this.getEntityClass())),
            catchError(this.handleError()),
        );
    }

}
