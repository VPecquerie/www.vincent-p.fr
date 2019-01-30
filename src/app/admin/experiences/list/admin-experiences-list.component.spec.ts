import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExperiencesListComponent } from './admin-experiences-list.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { AdminLayoutComponent } from '../../layout/admin.layout.component';
import { AdminAccountComponent } from '../../account/admin-account.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ExperienceHttpService } from '../../../services/entities/experience.http.service';

describe('AdminExperiencesListComponent', () => {
    let component: AdminExperiencesListComponent;
    let fixture: ComponentFixture<AdminExperiencesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, NavbarComponent, AdminLayoutComponent, AdminExperiencesListComponent],
            providers: [ExperienceHttpService],
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
        fixture = TestBed.createComponent(AdminExperiencesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
