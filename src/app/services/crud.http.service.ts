import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Deserialize, Serialize } from 'cerialize';
import { environment } from '../../environments/environment';


export abstract class CrudHttpService {

    public constructor(protected http: HttpClient) { }

    protected abstract getEntityClassName();
    protected abstract getEntityClass();


    public create(data: any) {
        const url = environment.api.url + environment.api.entities[this.getEntityClassName()];
        const jsonData = Serialize(data);
        return this.http.post(url, jsonData).pipe(
            map(result => Deserialize(result, this.getEntityClass())),
            catchError(this.handleError()),
        );
    }


    public readAll() {
        const url = environment.api.url + environment.api.entities[this.getEntityClassName()];
        return this.http.get(url).pipe(
            map(result => Deserialize(result, this.getEntityClass())),
            catchError(this.handleError()),
        );
    }

    public readOne(id: number | string) {
        const url = environment.api.url + environment.api.entities[this.getEntityClassName()] + '/' + id;
        return this.http.get(url).pipe(
            map(result => Deserialize(result, this.getEntityClass())),
            catchError(this.handleError()),
        );
    }


    public update(id: number | string, data: any) {
        const url = environment.api.url + environment.api.entities[this.getEntityClassName()] + '/' + id;
        const jsonData = Serialize(data);
        return this.http.put(url, jsonData).pipe(
            map(result => Deserialize(result, this.getEntityClass())),
            catchError(this.handleError()),
        );
    }

    public delete(id: number) {
        const url = environment.api.url + environment.api.entities[this.getEntityClassName()] + '/' + id;
        return this.http.delete(url);
    }

    protected handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            console.error(`${this.getEntityClassName()} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
