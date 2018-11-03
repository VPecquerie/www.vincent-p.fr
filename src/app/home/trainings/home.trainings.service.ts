import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { CommonHttpService } from '../../services/common.http.service';
import { environment } from '../../../environments/environment';
import { Training } from '../../entities/training';

@Injectable()
export class HomeTrainingService extends CommonHttpService {

  constructor(protected http: HttpClient) {
    super(http);
   }

  getTrainings(): Observable<Training[]> {
    const url = environment.api.url + environment.api.entities.trainings;
    return this.http.get<Training[]>(url).pipe(
      map(trainings => Training.deserializeArray(trainings)),
      tap(h => {
          const outcome = h ? `fetched` : `did not find`;
      }),
      catchError(this.handleError<Training[]>(`Get Trainings`))
  );
  }

}
