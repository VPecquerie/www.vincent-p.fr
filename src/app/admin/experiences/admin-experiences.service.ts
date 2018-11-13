import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Skill } from '../../entities/skill';
import { Experience } from '../../entities/experience';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { CommonHttpService } from '../../services/common.http.service';
import { Company } from '../../entities/company';

@Injectable()
export class AdminExperiencesService extends CommonHttpService {

    constructor(protected http: HttpClient) {
        super(http);
    }

    getExperiences(): Observable<Experience[]> {
        const url = environment.api.url + environment.api.entities.experiences;
        return this.http.get<Experience[]>(url).pipe(
            map(experiences => Experience.deserializeArray(experiences)),
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
            }),
            catchError(this.handleError<Experience[]>(`Get Experiences`))
        );
    }

    getExperience(experienceID: number): Observable<Experience> {
        const url = environment.api.url + environment.api.entities.experiences + '/' + experienceID;
        return this.http.get<Experience>(url).pipe(
            map(experience => new Experience(experience)),
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
            }),
            catchError(this.handleError<Experience>(`Get Experience ` + experienceID))
        );
    }

    createExperience(data: any) {
        const self = this;
        return new Promise((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.experiences;
            self.http.post(url, data).toPromise().then((result) => {
                resolve(result);
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    updateExperience(experienceId: number, data: Experience): Promise<Experience> {
        const self = this;
        return new Promise<Experience>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.experiences + '/' + experienceId;
            self.http.put(url, data).toPromise().then((result) => {
                const experience = new Experience(result);
                resolve(experience);
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }

    updateSkill(skillId: number, data): Promise<Skill> {
        const self = this;
        return new Promise<Skill>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.skills + '/' + skillId;
            self.http.put(url, data).toPromise().then((result) => {
                const skill = new Skill(result);
                resolve(skill);
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }

    deleteSkill(experienceId: number): Promise<any> {
        const self = this;
        return new Promise<Experience>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.experiences + '/' + experienceId;
            self.http.delete(url).toPromise().then((result) => {
                resolve();
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }

    getCompanies() {
        const url = environment.api.url + environment.api.entities.companies;
        return this.http.get<Company[]>(url).pipe(
            map(companies => Company.deserializeArray(companies)),
            tap(h => {
                const outcome = h ? `fetched` : `did not find`;
            }),
            catchError(this.handleError<Company[]>(`Get Companies`))
        );
    }
}
