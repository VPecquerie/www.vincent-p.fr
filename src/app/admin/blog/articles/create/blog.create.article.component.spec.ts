import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateArticleComponent } from './blog.create.article.component';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { SidebarComponent } from '../../../layout/sidebar/sidebar.component';
import { AdminLayoutComponent } from '../../../layout/admin.layout.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticleHttpService } from '../../../../services/entities/article.http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from '../../../../my-material/my-material.module';
import { QuillModule } from 'ngx-quill';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationService } from '../../../../services/notification.service';

describe('BlogCreateArticleComponent', () => {
    let component: BlogCreateArticleComponent;
    let fixture: ComponentFixture<BlogCreateArticleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent,
                SidebarComponent,
                AdminLayoutComponent,
                BlogCreateArticleComponent,
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
            ],
            providers: [
                ArticleHttpService,
                NotificationService
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogCreateArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
