import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutCommonFooterComponent } from './layout-common-footer.component';
import { ContactService } from '../../../../services/contact.service';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { LayoutCommonLegalMentionsComponent } from '../legal-mentions/layout-common-legal-mentions.component';
import { ServicesModule } from '../../../../modules/services.module';

describe('FooterComponent', () => {
    let component: LayoutCommonFooterComponent;
    let fixture: ComponentFixture<LayoutCommonFooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutCommonLegalMentionsComponent,
                LayoutCommonFooterComponent,
            ],
            providers: [
                ContactService,
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ServicesModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutCommonFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
