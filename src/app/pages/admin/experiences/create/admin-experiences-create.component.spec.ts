import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExperiencesCreateComponent } from './admin-experiences-create.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';
import { LayoutAdminComponent } from '../../../../components/layout/admin/layout-admin.component';
import { LayoutAdminNavbarComponent } from '../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminSidebarComponent } from '../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { ExperienceHttpService } from '../../../../services/entities/experience.http.service';
import { NotificationService } from '../../../../services/notification.service';
import { CompanyHttpService } from '../../../../services/entities/company.http.service';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { ServicesModule } from '../../../../modules/services.module';


describe('AdminExperiencesCreateComponent', () => {
    let component: AdminExperiencesCreateComponent;
    let fixture: ComponentFixture<AdminExperiencesCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutAdminComponent,
                LayoutAdminNavbarComponent,
                LayoutAdminSidebarComponent,
                AdminExperiencesCreateComponent],
            providers: [
                ExperienceHttpService,
                CompanyHttpService,
                NotificationService,
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                QuillModule.forRoot(),
                ServicesModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminExperiencesCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
