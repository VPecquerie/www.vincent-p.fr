import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TextEntity } from '../entities/text.entity';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonHttpService } from './common.http.service';

@Injectable()
export class TextService extends CommonHttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    public getTextWithSlug(slug: string): Observable<TextEntity> {
        const url = environment.api.url + environment.api.entities.texts + '/' + slug;
        return this.http.get(url).pipe(
            map(text => new TextEntity(text)),
            catchError(this.handleError<TextEntity>(`Get Text`)),
        );
    }
}
