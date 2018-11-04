import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AdminLoginService {
    constructor(private http: HttpClient) {
    }

    login(data): Promise<any> {
        return this.http.post(environment.api.url + environment.api.entities.users.login, data).toPromise();
    }

    getSavedCredentials() {
        const token = localStorage.getItem('user_token');
        return token;
    }

}
