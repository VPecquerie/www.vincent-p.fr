import { CrudHttpService } from '../crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/entities/article';
@Injectable()
export class ArticleHttpService extends CrudHttpService {

    constructor(http: HttpClient) {
        super(http);
    }

    protected getEntityClass() {
        return Article;
    }

    protected getEntityClassName() {
        return 'Article';
    }

}
