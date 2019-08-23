import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogDetailArticleComponent } from './blog-detail-article.component';
import { ServicesModule } from '../../../modules/services.module';
import { ComponentsModule } from '../../../modules/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('BlogDetailArticleComponent', () => {
    let component: BlogDetailArticleComponent;
    let fixture: ComponentFixture<BlogDetailArticleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BlogDetailArticleComponent,
            ],
            imports: [
                RouterTestingModule,
                ServicesModule,
                ComponentsModule,
                ScrollToModule.forRoot(),
                HttpClientTestingModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogDetailArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
