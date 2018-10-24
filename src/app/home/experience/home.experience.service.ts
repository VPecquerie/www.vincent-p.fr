import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Experience } from '../../entities/experience';
import { environment } from '../../../environments/environment';

@Injectable()
export class HomeExperienceService {
    constructor(protected http: HttpClient) {}

    getExperiences(): Promise<Experience[]> {
        const self = this;
        const url = environment.api.url + environment.api.entities.experiences;
        const promise = new Promise<Experience[]>((resolve, reject) => {
            self.http
                .get(url)
                .toPromise()
                .then((apiResult: any) => {
                    let entities = Experience.deserializeArray(apiResult);
                    entities = _.orderBy(entities, ['Start'], ['desc']);
                    resolve(entities);
                })
                .catch(() => {
                    reject([]);
                });
        });

        return promise;
    }
}
