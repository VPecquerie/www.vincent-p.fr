import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LayoutCommonComponent } from './layout-common.component';
import { MyMaterialModule } from '../../../modules/my-material.module';
import { LayoutCommonLegalMentionsComponent } from './legal-mentions/layout-common-legal-mentions.component';
import { LayoutCommonFooterComponent } from './footer/layout-common-footer.component';
import { LayoutCommonNavbarComponent } from './navbar/layout-common-navbar.component';
import { ServicesModule } from '../../../modules/services.module';

describe('LayoutComponent', () => {
    let component: LayoutCommonComponent;
    let fixture: ComponentFixture<LayoutCommonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutCommonLegalMentionsComponent,
                LayoutCommonFooterComponent,
                LayoutCommonNavbarComponent,
                LayoutCommonComponent,
            ],
            providers: [],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ScrollToModule.forRoot(),
                ServicesModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutCommonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
