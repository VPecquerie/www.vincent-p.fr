import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingListComponent } from './admin-training-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutAdminComponent } from '../../../../components/layout/admin/layout-admin.component';
import { LayoutAdminSidebarComponent } from '../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminNavbarComponent } from '../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { TrainingHttpService } from '../../../../services/entities/training.http.service';
import { MyMaterialModule } from '../../../../modules/my-material.module';
import { ServicesModule } from '../../../../modules/services.module';
describe('AdminTrainingListComponent', () => {
    let component: AdminTrainingListComponent;
    let fixture: ComponentFixture<AdminTrainingListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutAdminComponent,
                LayoutAdminSidebarComponent,
                LayoutAdminNavbarComponent,
                AdminTrainingListComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ServicesModule
            ], providers: [
                TrainingHttpService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminTrainingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
