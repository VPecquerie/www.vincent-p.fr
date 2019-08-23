import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSkillsListComponent } from './admin-skills-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SkillGroupHttpService } from '../../../../services/entities/skill-group.http.service';
import { SkillHttpService } from '../../../../services/entities/skill.http.service';
import { LayoutAdminSidebarComponent } from '../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminNavbarComponent } from '../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminComponent } from '../../../../components/layout/admin/layout-admin.component';
import { ServicesModule } from '../../../../modules/services.module';


describe('AdminSkillsListComponent', () => {
    let component: AdminSkillsListComponent;
    let fixture: ComponentFixture<AdminSkillsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutAdminSidebarComponent, LayoutAdminNavbarComponent, LayoutAdminComponent, AdminSkillsListComponent],
            providers: [SkillGroupHttpService, SkillHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                ServicesModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminSkillsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
