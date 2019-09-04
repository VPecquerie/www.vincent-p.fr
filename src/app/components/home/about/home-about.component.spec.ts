import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutComponent } from './home-about.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TextEntityHttpService } from '../../../services/entities/text.entity.http.service';
import { MyMaterialModule } from '../../../modules/my-material.module';
import { environment } from '../../../../environments/environment';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('HomeAboutComponent', () => {
    let component: HomeAboutComponent;
    let fixture: ComponentFixture<HomeAboutComponent>;
    let getIntroductionHttpMock: HttpTestingController;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeAboutComponent],
            providers: [TextEntityHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MyMaterialModule,
            ],
        }).compileComponents();

        getIntroductionHttpMock = TestBed.get(HttpTestingController);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeAboutComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be hidden if introdcution is null', () => {
        component.introduction = null;
    });

    it('should print the Text', () => {

        const req = getIntroductionHttpMock.expectOne(environment.api.url + environment.api.entities.TextEntity + '/Introduction', 'Get the Introduction');
        req.flush({
            'TextId': '1',
            'Creator': null,
            'Slug': 'Introduction',
            'Content': 'Contenu 1',
            'Updated': '2019-07-06T09:50:55.9633333',
            'Created': '2018-01-01T00:00:00',
            'IsPublished': true,
        });

        expect(req.request.method).toBe('GET');
        getIntroductionHttpMock.verify();
        fixture.detectChanges();

        const paragraph = fixture.debugElement.nativeElement.querySelector('#introduction');
        expect(paragraph.textContent).toEqual('Contenu 1');
    });
});
