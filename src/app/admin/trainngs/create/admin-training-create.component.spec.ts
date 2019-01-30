import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingCreateComponent } from './admin-training-create.component';
import { AdminLayoutComponent } from '../../layout/admin.layout.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../../my-material/my-material.module';
import { TrainingHttpService } from '../../../services/entities/training.http.service';
import { NotificationService } from '../../../services/notification.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminTrainingCreateComponent', () => {
    let component: AdminTrainingCreateComponent;
    let fixture: ComponentFixture<AdminTrainingCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminLayoutComponent, SidebarComponent, NavbarComponent, AdminTrainingCreateComponent],
            providers: [TrainingHttpService, NotificationService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule
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
