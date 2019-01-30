import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingListComponent } from './admin-training-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../../my-material/my-material.module';
import { AdminLayoutComponent } from '../../layout/admin.layout.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { TrainingHttpService } from '../../../services/entities/training.http.service';

describe('AdminTrainingListComponent', () => {
    let component: AdminTrainingListComponent;
    let fixture: ComponentFixture<AdminTrainingListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdminLayoutComponent,
                SidebarComponent,
                NavbarComponent,
                AdminTrainingListComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule
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
