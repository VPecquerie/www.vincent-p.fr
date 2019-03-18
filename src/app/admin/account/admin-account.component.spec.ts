import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountComponent } from './admin-account.component';
import { AdminLayoutComponent } from '../layout/admin.layout.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { UserService } from '../../services/user.service';
import { UserHttpService } from '../../services/entities/user.http.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from '../../services/notification.service';

describe('AdminAccountComponent', () => {
    let component: AdminAccountComponent;
    let fixture: ComponentFixture<AdminAccountComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, NavbarComponent, AdminLayoutComponent, AdminAccountComponent],
            providers: [UserService, UserHttpService, NotificationService],
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
        fixture = TestBed.createComponent(AdminAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
