import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExperiencesCreateComponent } from './admin-experiences-create.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../../my-material/my-material.module';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { AdminLayoutComponent } from '../../layout/admin.layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceHttpService } from '../../../services/entities/experience.http.service';
import { CompanyHttpService } from '../../../services/entities/company.http.service';
import { QuillModule } from 'ngx-quill';
import { NotificationService } from '../../../services/notification.service';

describe('AdminExperiencesCreateComponent', () => {
    let component: AdminExperiencesCreateComponent;
    let fixture: ComponentFixture<AdminExperiencesCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, NavbarComponent, AdminLayoutComponent, AdminExperiencesCreateComponent],
            providers: [ExperienceHttpService, CompanyHttpService, NotificationService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                QuillModule.forRoot(),
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
