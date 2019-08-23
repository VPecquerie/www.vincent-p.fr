import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExperiencesListComponent } from './admin-experiences-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ExperienceHttpService } from '../../../../services/entities/experience.http.service';
import { LayoutAdminSidebarComponent } from '../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminNavbarComponent } from '../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminComponent } from '../../../../components/layout/admin/layout-admin.component';
import { ServicesModule } from '../../../../modules/services.module';

describe('AdminExperiencesListComponent', () => {
    let component: AdminExperiencesListComponent;
    let fixture: ComponentFixture<AdminExperiencesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutAdminSidebarComponent, LayoutAdminNavbarComponent, LayoutAdminComponent, AdminExperiencesListComponent],
            providers: [ExperienceHttpService],
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
        fixture = TestBed.createComponent(AdminExperiencesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
