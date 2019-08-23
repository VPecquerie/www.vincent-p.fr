import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutAdminComponent } from '../../../components/layout/admin/layout-admin.component';
import { LayoutAdminSidebarComponent } from '../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminNavbarComponent } from '../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { ServicesModule } from '../../../modules/services.module';

describe('AdminDashboardComponent', () => {
    let component: AdminDashboardComponent;
    let fixture: ComponentFixture<AdminDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutAdminComponent,
                LayoutAdminSidebarComponent,
                LayoutAdminNavbarComponent,
                AdminDashboardComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                ServicesModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
