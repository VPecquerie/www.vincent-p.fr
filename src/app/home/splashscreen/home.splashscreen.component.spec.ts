import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSplashScreenComponent } from './home.splashscreen.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';

describe('HomeSplashscreenComponent', () => {
    let component: HomeSplashScreenComponent;
    let fixture: ComponentFixture<HomeSplashScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeSplashScreenComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ScrollToModule.forRoot(),
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeSplashScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
