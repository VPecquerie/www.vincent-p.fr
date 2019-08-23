import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HomeExperiencesComponent } from './home-experiences.component';
import { ExperienceHttpService } from '../../../services/entities/experience.http.service';
import { MyMaterialModule } from '../../../modules/my-material.module';

describe('HomeExperienceComponent', () => {
    let component: HomeExperiencesComponent;
    let fixture: ComponentFixture<HomeExperiencesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeExperiencesComponent],
            providers: [ExperienceHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                LazyLoadImageModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeExperiencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
