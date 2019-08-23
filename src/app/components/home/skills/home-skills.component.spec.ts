import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSkillsComponent } from './home-skills.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SkillGroupHttpService } from '../../../services/entities/skill-group.http.service';
import { MyMaterialModule } from '../../../modules/my-material.module';

describe('HomeSkillsComponent', () => {
    let component: HomeSkillsComponent;
    let fixture: ComponentFixture<HomeSkillsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeSkillsComponent],
            providers: [SkillGroupHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeSkillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
