import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountComponent } from './admin-account.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../../services/user.service';
import { LayoutAdminNavbarComponent } from '../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminSidebarComponent } from '../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminComponent } from '../../../components/layout/admin/layout-admin.component';
import { UserHttpService } from '../../../services/entities/user.http.service';
import { NotificationService } from '../../../services/notification.service';
import { MyMaterialModule } from '../../../modules/my-material.module';
import { ServicesModule } from '../../../modules/services.module';


describe('AdminAccountComponent', () => {
    let component: AdminAccountComponent;
    let fixture: ComponentFixture<AdminAccountComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutAdminNavbarComponent,
                LayoutAdminSidebarComponent,
                LayoutAdminComponent,
                AdminAccountComponent,
            ],
            providers: [UserService, UserHttpService, NotificationService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ServicesModule
            ],
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

    it('form invalid when empty', () => {
        component.accountForm.setValue({
            password: '',
            passwordValidation: '',
            Email: '',
            Firstname: '',
            Lastname: '',
        });
        expect(component.accountForm.valid).toBeFalsy();
    });

    it('form valid when filled without password', () => {
        const formData = {
            password: '',
            passwordValidation: '',
            Email: 'john.doe@test.fr',
            Firstname: 'john',
            Lastname: 'doe',
        };
        component.accountForm.setValue(formData);
        expect(component.accountForm.valid).toBeTruthy();
    });

    it('form valid when filled with password', () => {
        const formData = {
            password: 'u>tJeuTu#,i52]8T$G&7sH,Y6)B8Bb66',
            passwordValidation: 'u>tJeuTu#,i52]8T$G&7sH,Y6)B8Bb66',
            Email: 'john.doe@test.fr',
            Firstname: 'john',
            Lastname: 'doe',
        };

        component.accountForm.setValue(formData);
        expect(component.accountForm.valid).toBeTruthy();
    });
});
