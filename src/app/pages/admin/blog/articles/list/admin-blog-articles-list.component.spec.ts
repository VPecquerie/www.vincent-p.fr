import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminBlogArticlesListComponent } from './admin-blog-articles-list.component';
import { LayoutAdminComponent } from '../../../../../components/layout/admin/layout-admin.component';
import { LayoutAdminNavbarComponent } from '../../../../../components/layout/admin/navbar/layout-admin-navbar.component';
import { LayoutAdminSidebarComponent } from '../../../../../components/layout/admin/sidebar/layout-admin-sidebar.component';
import { ArticleHttpService } from '../../../../../services/entities/article.http.service';
import { NotificationService } from '../../../../../services/notification.service';
import { ServicesModule } from '../../../../../modules/services.module';

describe('AdminBlogArticlesListComponent', () => {
    let component: AdminBlogArticlesListComponent;
    let fixture: ComponentFixture<AdminBlogArticlesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayoutAdminComponent,
                LayoutAdminNavbarComponent,
                LayoutAdminSidebarComponent,
                AdminBlogArticlesListComponent,
            ],
            imports: [
                CommonModule,
                RouterTestingModule,
                HttpClientTestingModule,
                RouterTestingModule,
                ServicesModule
            ],
            providers: [
                ArticleHttpService,
                NotificationService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminBlogArticlesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
