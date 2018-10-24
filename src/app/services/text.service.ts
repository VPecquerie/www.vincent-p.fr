import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TextEntity } from '../entities/text.entity';

@Injectable()
export class TextService {
    constructor(protected http: HttpClient) {}

    public getTextBySlug(slug: string): Promise<TextEntity> {
        const self = this;
        const url =
            environment.api.url + environment.api.entities.texts + '/' + slug;
        const promise = new Promise<TextEntity>((resolve, reject) => {
            self.http
                .get(url)
                .toPromise()
                .then(apiResult => {
                    const entity = new TextEntity(apiResult);
                    resolve(entity);
                })
                .catch(() => {
                    reject(null);
                });
        });

        return promise;
    }
}
