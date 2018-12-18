import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Skill } from '../../entities/skill';
import { Training } from '../../entities/training';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class AdminTrainingsService {
    constructor(private http: HttpClient) {
    }

    getTrainings(): Observable<Training[]> {
        const url = environment.api.url + environment.api.entities.trainings;

        return this.http.get<Training[]>(url).pipe(
            map(trainings => Training.deserializeArray(trainings)),
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
            self.http.delete(url).toPromise().then(() => {
                resolve();
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }

    getTraining(id: number) {
        const url = environment.api.url + environment.api.entities.trainings + '/' + id;

        return this.http.get<Training>(url).pipe(
            map(training => new Training(training)),
        );
    }

    updateTraining(id: number, data: any) {
        const self = this;
        return new Promise<Training>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.trainings + '/' + id;
            self.http.put(url, data).toPromise().then((result) => {
                const experience = new Training(result);
                resolve(experience);
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }
}
