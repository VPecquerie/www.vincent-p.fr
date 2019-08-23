import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogListArticlesComponent } from './blog-list-articles.component';
import { ServicesModule } from '../../../modules/services.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../../../modules/components.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


describe('BlogListArticlesComponent', () => {
    let component: BlogListArticlesComponent;
    let fixture: ComponentFixture<BlogListArticlesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlogListArticlesComponent],
            imports: [
                RouterTestingModule,
                ComponentsModule,
                ServicesModule,
                HttpClientTestingModule,
                ScrollToModule.forRoot()
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogListArticlesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
