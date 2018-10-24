import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skillgroup } from '../../entities/skillgroup';
import { environment } from '../../../environments/environment';

@Injectable()
export class HomeSkillsService {
    constructor(protected http: HttpClient) {}

    getSkills(): Promise<Skillgroup[]> {
        const self = this;
        const url = environment.api.url + environment.api.entities.skillGroups;
        const promise = new Promise<Skillgroup[]>((resolve, reject) => {
            self.http
                .get(url)
                .toPromise()
                .then((apiResult: any) => {
                    const entities = Skillgroup.deserializeArray(apiResult);
                    resolve(entities);
                })
                .catch(() => {
                    reject([]);
                });
        });

        return promise;
    }
}
