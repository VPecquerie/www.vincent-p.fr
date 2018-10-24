import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TextEntity } from '../entities/text.entity';
import { Observable } from 'rxjs';

@Injectable()
export class TextService {
    constructor(protected http: HttpClient) {}

    public getTextWithSlug(slug: string): Observable<TextEntity> {
        const url =
            environment.api.url + environment.api.entities.texts + '/' + slug;
        return this.http.get<TextEntity>(url);
    }
}
