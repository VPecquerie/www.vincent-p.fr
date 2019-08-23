import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LayoutCommonNavbarComponent } from './layout-common-navbar.component';
import { MyMaterialModule } from '../../../../modules/my-material.module';

describe('LayoutComponent', () => {
    let component: LayoutCommonNavbarComponent;
    let fixture: ComponentFixture<LayoutCommonNavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutCommonNavbarComponent],
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
        fixture = TestBed.createComponent(LayoutCommonNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
