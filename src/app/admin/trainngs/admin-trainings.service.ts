import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Skill } from '../../entities/skill';
import { Training } from '../../entities/training';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import * as _ from 'lodash';

@Injectable()
export class AdminTrainingsService {
    constructor(private http: HttpClient) {
    }

    getTrainings(): Observable<Training[]> {
        const self = this;
        const url = environment.api.url + environment.api.entities.trainings;

        return this.http.get<Training[]>(url).pipe(
            map(trainings => Training.deserializeArray(trainings)),
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
            })
        );
    }

    createTraining(data: any): Promise<Training> {
        const self = this;
        return new Promise((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.trainings;
            self.http.post(url, data).toPromise().then((result) => {
                const group = new Training(result);
                resolve(group);
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    delete(trainingId: number): Promise<Skill> {
        const self = this;
        return new Promise<Skill>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.trainings + '/' + trainingId;
            self.http.delete(url).toPromise().then((result) => {
                resolve();
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }
}
