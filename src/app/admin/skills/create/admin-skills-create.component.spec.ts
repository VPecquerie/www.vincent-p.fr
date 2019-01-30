import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSkillsCreateComponent } from './admin-skills-create.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../../my-material/my-material.module';
import { SkillHttpService } from '../../../services/entities/skill.http.service';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { AdminLayoutComponent } from '../../layout/admin.layout.component';
import { SkillgroupHttpService } from '../../../services/entities/skillgroup.http.service';
import { NotificationService } from '../../../services/notification.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminSkillsCreateComponent', () => {
    let component: AdminSkillsCreateComponent;
    let fixture: ComponentFixture<AdminSkillsCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, NavbarComponent, AdminLayoutComponent, AdminSkillsCreateComponent],
            providers: [SkillHttpService, SkillgroupHttpService, NotificationService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule
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
