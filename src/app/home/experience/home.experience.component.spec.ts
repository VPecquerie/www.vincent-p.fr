import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExperienceComponent } from './home.experience.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { ExperienceHttpService } from '../../services/entities/experience.http.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

describe('HomeExperienceComponent', () => {
    let component: HomeExperienceComponent;
    let fixture: ComponentFixture<HomeExperienceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeExperienceComponent],
            providers: [ExperienceHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                LazyLoadImageModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeExperienceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
