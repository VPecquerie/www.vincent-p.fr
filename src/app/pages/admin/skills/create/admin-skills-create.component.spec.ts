import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSkillsCreateComponent } from './admin-skills-create.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutAdminSidebarComponent } from '../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminNavbarComponent } from '../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminComponent } from '../../../../components/layout/admin/layout-admin.component';
import { SkillHttpService } from '../../../../services/entities/skill.http.service';
import { SkillGroupHttpService } from '../../../../services/entities/skill-group.http.service';
import { NotificationService } from '../../../../services/notification.service';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { ServicesModule } from '../../../../modules/services.module';

describe('AdminSkillsCreateComponent', () => {
    let component: AdminSkillsCreateComponent;
    let fixture: ComponentFixture<AdminSkillsCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutAdminSidebarComponent, LayoutAdminNavbarComponent, LayoutAdminComponent, AdminSkillsCreateComponent],
            providers: [SkillHttpService, SkillGroupHttpService, NotificationService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ServicesModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminSkillsCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
