import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutCommonFooterComponent } from './layout-common-footer.component';
import { ContactService } from '../../../../services/contact.service';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { LayoutCommonLegalMentionsComponent } from '../legal-mentions/layout-common-legal-mentions.component';
import { ServicesModule } from '../../../../modules/services.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../../environments/environment';

describe('LayoutCommonFooterComponent', () => {

    let component: LayoutCommonFooterComponent;
    let fixture: ComponentFixture<LayoutCommonFooterComponent>;
    let httpMock: HttpTestingController;


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
                HttpClientTestingModule,
                RouterTestingModule,
                MyMaterialModule,
                ServicesModule,
            ],
        })
            .compileComponents();

        httpMock = TestBed.get(HttpTestingController);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutCommonFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Submit valid form should be post Contact Entity', () => {
        component.form.setValue({
            Message: 'Message',
            Mail: 'test@test.fr',
            Name: 'Test',
            Phone: '0102030405',
        });

        expect(component.form.valid).toBeTruthy();

        component.onSubmit();

        const req = httpMock.expectOne(environment.api.url + environment.api.entities.Contact, 'Post Contact Message');
        expect(req.request.method).toBe('POST');

        httpMock.verify();
    });

    it('Submit an invalid form', () => {

        component.form.setValue({
            Message: '',
            Mail: '',
            Name: '',
            Phone: '',
        });

        expect(component.form.invalid).toBeTruthy();
        component.onSubmit();
        httpMock.expectNone(environment.api.url + environment.api.entities.Contact, 'Post Contact Message');
        httpMock.verify();
    });
});
