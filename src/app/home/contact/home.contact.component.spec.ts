import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactComponent } from './home.contact.component';
import { TextEntityHttpService } from '../../services/entities/text.entity.http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { HomeContactService } from './home.contact.service';
import { LegalMentionsComponent } from '../legal-mentions/legal-mentions.component';

describe('HomeContactComponent', () => {
    let component: HomeContactComponent;
    let fixture: ComponentFixture<HomeContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LegalMentionsComponent, HomeContactComponent],
            providers: [HomeContactService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
