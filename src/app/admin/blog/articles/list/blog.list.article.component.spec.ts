import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListArticleComponent } from './blog.list.article.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { SidebarComponent } from '../../../layout/sidebar/sidebar.component';
import { AdminLayoutComponent } from '../../../layout/admin.layout.component';
import { ArticleHttpService } from '../../../../services/entities/article.http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotificationService } from '../../../../services/notification.service';

describe('BlogListArticleComponent', () => {
    let component: BlogListArticleComponent;
    let fixture: ComponentFixture<BlogListArticleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent,
                SidebarComponent,
                AdminLayoutComponent,
                BlogListArticleComponent,
            ],
            imports: [
                CommonModule,
                RouterTestingModule,
                HttpClientTestingModule,
            ],
            providers: [
                ArticleHttpService,
                NotificationService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogListArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
