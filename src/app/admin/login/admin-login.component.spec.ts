import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginComponent } from './admin-login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { UserService } from '../../services/user.service';
import { UserHttpService } from '../../services/entities/user.http.service';
import { NotificationService } from '../../services/notification.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminLoginComponent', () => {
    let component: AdminLoginComponent;
    let fixture: ComponentFixture<AdminLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminLoginComponent],
            providers: [NotificationService, UserService, UserHttpService],
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
        fixture = TestBed.createComponent(AdminLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
