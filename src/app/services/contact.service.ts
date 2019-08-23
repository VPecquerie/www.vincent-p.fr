import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Service } from './abstract.service';

@Injectable()
export class ContactService extends Service {
    constructor(private http: HttpClient) {
        super();
    }

    saveForm(model): Promise<any> {
        const url = environment.api.url + environment.api.entities.Contact;
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };

        return this.http.post(url, JSON.stringify(model), options).toPromise();
    }
}
