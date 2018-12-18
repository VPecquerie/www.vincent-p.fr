import { Injectable, EventEmitter } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class CustomHttpHandler implements HttpInterceptor {
    private static nbOfQueries = 0;
    public static onLoad: EventEmitter<any> = new EventEmitter();

    constructor(private userService: UserService, private router: Router) {
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        this.setNumberOfQueries(+1);
        const user = this.userService.getUser();
        if (user && !user.Token.hasExpired()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.Token.AccessToken}`,
                },
            });
        }
        return next.handle(request).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        this.setNumberOfQueries(-1);
                    }
                },
                err => {
                    if (err instanceof HttpErrorResponse) {
                        this.setNumberOfQueries(-1);
                        if (err.status === 401) {
                            this.router.navigate(['/login']);
                        }
                    }
                },
            ),
        );
    }

    setNumberOfQueries(additionnalValue: number) {
        CustomHttpHandler.nbOfQueries += additionnalValue;
        CustomHttpHandler.onLoad.emit(CustomHttpHandler.nbOfQueries);
    }
}
