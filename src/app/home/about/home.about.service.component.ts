import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TextEntity } from '../../entities/text.entity';
import { TextService } from '../../services/text.service';
import { Observable } from 'rxjs';

@Injectable()
export class HomeAboutService extends TextService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    public getIntroduction(): Observable<TextEntity> {
        return this.getTextWithSlug('introduction');
    }
}
