import { inject, TestBed } from '@angular/core/testing';
import { ArticleHttpService } from './article.http.service';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Article } from '../../models/entities/article';

describe('ArticleHttpService', () => {

    let service: ArticleHttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ArticleHttpService],
            imports: [
                HttpClientTestingModule,
            ],
        });

        service = TestBed.get(ArticleHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([ArticleHttpService], (service: ArticleHttpService) => {
        expect(service).toBeTruthy();
    }));

    it('ReadAll should return an array of companies', () => {

        service.readAll().subscribe((data: Article[]) => {
            expect(data.length).toBe(2);
        });


        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Article, 'Get Articles');
        req.flush([{
            'ArticleId': 1,
            'Title': 'Article 1',
            'Content': 'Content 1',
            'Resume': 'Resume 1',
            'CreatedDate': '2019-08-23T14:20:28.1755702',
            'UpdatedDate': '2019-08-23T15:04:29.2987093',
            'PublishedDate': '2019-08-22T22:00:00',
            'IsPublished': true,
            'Comments': null,
        }, {
            'ArticleId': 2,
            'Title': 'Article 2',
            'Content': 'Content 2',
            'Resume': 'Resume 2',
            'CreatedDate': '2019-08-23T14:20:28.1755702',
            'UpdatedDate': '2019-08-23T15:04:29.2987093',
            'PublishedDate': '2019-08-22T22:00:00',
            'IsPublished': true,
            'Comments': null,
        }]);

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });

    it('ReadOne(1) should return an Article with id:1', () => {

        service.readOne(1).subscribe((article: Article) => {
            expect(article.ArticleId).toBe(1);
            expect(article.Title).toBe('Article 1');
            expect(article.Content).toBe('Content 1');
            expect(article.Resume).toBe('Resume 1');
        });

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Article + '/' + 1, 'Get the first article');
        req.flush({
            'ArticleId': 1,
            'Title': 'Article 1',
            'Content': 'Content 1',
            'Resume': 'Resume 1',
            'CreatedDate': '2019-08-23T14:20:28.1755702',
            'UpdatedDate': '2019-08-23T15:04:29.2987093',
            'PublishedDate': '2019-08-22T22:00:00',
            'IsPublished': true,
            'Comments': null,
        });

        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });
});
