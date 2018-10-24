import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeContactComponentFormModel } from './home.contact.component.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class HomeContactService {
    constructor(private http: HttpClient) {}

    saveForm(model: HomeContactComponentFormModel): Promise<any> {
        const url = environment.api.url + environment.api.entities.contact;
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        const options = { headers: headers };

        return this.http.post(url, JSON.stringify(model), options).toPromise();
    }
}
