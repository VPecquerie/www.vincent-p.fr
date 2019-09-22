import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAddComponent } from './comments-add.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TextEntityHttpService } from '../../../services/entities/text.entity.http.service';
import { MyMaterialModule } from '../../../modules/my-material.module';


describe('HomeAboutComponent', () => {
    let component: CommentsAddComponent;
    let fixture: ComponentFixture<CommentsAddComponent>;
    let getIntroductionHttpMock: HttpTestingController;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentsAddComponent],
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
        fixture = TestBed.createComponent(CommentsAddComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
