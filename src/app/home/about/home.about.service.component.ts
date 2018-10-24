import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TextEntity } from '../../entities/text.entity';
import { TextService } from '../../services/text.service';

@Injectable()
export class HomeAboutService extends TextService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    public getIntroduction(): Promise<TextEntity> {
        return this.getTextBySlug('introduction');
    }
}
