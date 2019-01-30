import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeComponent } from './admin-home.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { AdminLayoutComponent } from '../layout/admin.layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminHomeComponent', () => {
    let component: AdminHomeComponent;
    let fixture: ComponentFixture<AdminHomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, NavbarComponent, AdminLayoutComponent, AdminHomeComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
