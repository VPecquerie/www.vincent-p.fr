import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skillgroup } from '../../entities/skillgroup';
import { environment } from '../../../environments/environment';
import { CommonHttpService } from '../../services/common.http.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HomeSkillsService extends CommonHttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    getSkills(): Observable<Skillgroup[]> {
        const url = environment.api.url + environment.api.entities.skillGroups;
        return this.http.get<Skillgroup[]>(url).pipe(
            map(groups => groups),
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
            }),
            catchError(this.handleError<Skillgroup[]>(`Get Skills`))
        );
    }
/*
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
    }*/
}
