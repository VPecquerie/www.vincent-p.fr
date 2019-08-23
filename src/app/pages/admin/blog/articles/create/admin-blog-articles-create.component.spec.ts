import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { QuillModule } from 'ngx-quill';
import { BrowserModule } from '@angular/platform-browser';
import { AdminBlogArticlesCreateComponent } from './admin-blog-articles-create.component';
import { LayoutAdminNavbarComponent } from '../../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminSidebarComponent } from '../../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { LayoutAdminComponent } from '../../../../../components/layout/admin/layout-admin.component';
import { MyMaterialModule } from '../../../../../modules/my-material.module';
import { ArticleHttpService } from '../../../../../services/entities/article.http.service';
import { NotificationService } from '../../../../../services/notification.service';
import { ServicesModule } from '../../../../../modules/services.module';


describe('BlogArticlesCreateComponent', () => {
    let component: AdminBlogArticlesCreateComponent;
    let fixture: ComponentFixture<AdminBlogArticlesCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutAdminNavbarComponent,
                LayoutAdminSidebarComponent,
                LayoutAdminComponent,
                AdminBlogArticlesCreateComponent,
            ],
            imports: [
                CommonModule,
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                MyMaterialModule,
                QuillModule.forRoot(),
                BrowserModule,
                ServicesModule,
            ],
            providers: [
                ArticleHttpService,
                NotificationService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminBlogArticlesCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
