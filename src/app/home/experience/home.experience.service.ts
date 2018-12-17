import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Experience } from '../../entities/experience';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonHttpService } from '../../services/common.http.service';

@Injectable()
export class HomeExperienceService extends CommonHttpService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    getExperiences(): Observable<Experience[]> {
        const url = environment.api.url + environment.api.entities.experiences;
        return this.http.get<Experience[]>(url).pipe(
            map(experiences => _.orderBy(Experience.deserializeArray(experiences), ['Start'], ['desc'])),
            catchError(this.handleError<Experience[]>(`Get Experiences`)),
        );
    }
}
