import { inject, TestBed } from '@angular/core/testing';

import { UserHttpService } from './user.http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../../models/entities/user';
import { environment } from '../../../environments/environment';
import { TokenInfo } from '../../models/entities/tokeninfo';

describe('UserHttpService', () => {

    let service: UserHttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserHttpService],
            imports: [
                HttpClientTestingModule,
            ],
        });

        service = TestBed.get(UserHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        service.dispose();
    });

    it('should be created', inject([UserHttpService], (service: UserHttpService) => {
        expect(service).toBeTruthy();
    }));

    it('Login should return a valid user', () => {

        const date = new Date();
        const data = {
            username: 'Test',
            password: 'Test',
        };

        service.login(data).subscribe((user: User) => {
            expect(user.UserId).toBe(1);
            expect(user.Email).toBe('test@test.fr');
            expect(user.Firstname).toBe('Firstname');
            expect(user.Lastname).toBe('Lastname');

            expect(user.Token.AccessToken).toBe('AccessToken');
            expect(user.Token.ExpiresAt.toUTCString()).toBe(date.toUTCString());
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.User.login, 'Log the User');
        req.flush({
            UserId: 1,
            Email: 'test@test.fr',
            Firstname: 'Firstname',
            Lastname: 'Lastname',
            Token: {
                AccessToken: 'AccessToken',
                ExpiresAt: date.toUTCString(),
            },
        });

        expect(req.request.method).toBe('POST');
        httpMock.verify();
    });

    it('An expired token should have HasExpired to be true',() => {
       const tokenInfo = new TokenInfo();
       tokenInfo.ExpiresAt = new Date('2010-01-01');

       expect(tokenInfo.hasExpired()).toBeTruthy();
    });

    it('A valid token should have HasExpired to be false',() => {
        const tokenInfo = new TokenInfo();
        tokenInfo.ExpiresAt = new Date('2100-01-01');

        expect(tokenInfo.hasExpired()).toBeFalsy();
    });
});
