import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSkillsListComponent } from './admin-skills-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SkillgroupHttpService } from '../../../services/entities/skillgroup.http.service';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { AdminLayoutComponent } from '../../layout/admin.layout.component';
import { SkillHttpService } from '../../../services/entities/skill.http.service';

describe('AdminSkillsListComponent', () => {
    let component: AdminSkillsListComponent;
    let fixture: ComponentFixture<AdminSkillsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent, NavbarComponent, AdminLayoutComponent, AdminSkillsListComponent],
            providers: [SkillgroupHttpService, SkillHttpService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
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
