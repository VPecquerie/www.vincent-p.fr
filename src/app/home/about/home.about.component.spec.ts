import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutComponent } from './home.about.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { TextEntityHttpService } from '../../services/entities/text.entity.http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HomeAboutComponent', () => {
    let component: HomeAboutComponent;
    let fixture: ComponentFixture<HomeAboutComponent>;

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
                MyMaterialModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeAboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
