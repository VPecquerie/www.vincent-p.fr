import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingCreateComponent } from './admin-training-create.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';
import { LayoutAdminNavbarComponent } from '../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminSidebarComponent } from '../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminComponent } from '../../../../components/layout/admin/layout-admin.component';
import { TrainingHttpService } from '../../../../services/entities/training.http.service';
import { NotificationService } from '../../../../services/notification.service';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { ServicesModule } from '../../../../modules/services.module';

describe('AdminTrainingCreateComponent', () => {
    let component: AdminTrainingCreateComponent;
    let fixture: ComponentFixture<AdminTrainingCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutAdminNavbarComponent, LayoutAdminSidebarComponent, LayoutAdminComponent, AdminTrainingCreateComponent],
            providers: [NotificationService, TrainingHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                QuillModule.forRoot(),
                ServicesModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminTrainingCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
