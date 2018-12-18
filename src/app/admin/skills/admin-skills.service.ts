import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skillgroup } from '../../entities/skillgroup';
import { environment } from '../../../environments/environment';
import { Skill } from '../../entities/skill';

@Injectable()
export class AdminSkillsService {
    constructor(private http: HttpClient) {
    }

    getSkillsGroups(): Promise<Skillgroup[]> {
        const self = this;
        return new Promise<Skillgroup[]>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.skillGroups;
            self.http.get(url).toPromise().then((result) => {
                const skillGroups = Skillgroup.deserializeArray(result);
                resolve(skillGroups);
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    createGroup(data: any): Promise<Skillgroup> {
        const self = this;
        return new Promise((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.skillGroups;
            self.http.post(url, data).toPromise().then((result) => {
                const group = new Skillgroup(result);
                resolve(group);
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    deleteGroup(groupId: number): Promise<Skill> {
        const self = this;
        return new Promise<Skill>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.skillGroups + '/' + groupId;
            self.http.delete(url).toPromise().then(() => {
                resolve();
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }


    createSkill(data: any) {
        const self = this;
        return new Promise((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.skills;
            self.http.post(url, data).toPromise().then((result) => {
                resolve(result);
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    updateGroup(groupId: number, data: Skillgroup): Promise<Skillgroup> {
        const self = this;
        return new Promise<Skillgroup>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.skillGroups + '/' + groupId;
            self.http.put(url, data).toPromise().then((result) => {
                const skill = new Skillgroup(result);
                resolve(skill);
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

    deleteSkill(skillId: number): Promise<Skill> {
        const self = this;
        return new Promise<Skill>((resolve, reject) => {
            const url = environment.api.url + environment.api.entities.skills + '/' + skillId;
            self.http.delete(url).toPromise().then(() => {
                resolve();
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }
}
