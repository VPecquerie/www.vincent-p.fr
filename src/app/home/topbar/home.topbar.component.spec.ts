import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopbarComponent } from './home.topbar.component';
import { TextEntityHttpService } from '../../services/entities/text.entity.http.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

describe('HomeTopbarComponent', () => {
    let component: HomeTopbarComponent;
    let fixture: ComponentFixture<HomeTopbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeTopbarComponent],
            providers: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ScrollToModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeTopbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
