import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutBlogComponent } from './layout-blog.component';
import { LayoutCommonComponent } from '../common/layout-common.component';
import { LayoutCommonNavbarComponent } from '../common/navbar/layout-common-navbar.component';
import { LayoutCommonFooterComponent } from '../common/footer/layout-common-footer.component';
import { LayoutCommonLegalMentionsComponent } from '../common/legal-mentions/layout-common-legal-mentions.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicesModule } from '../../../modules/services.module';


describe('LayoutBlogComponent', () => {
    let component: LayoutBlogComponent;
    let fixture: ComponentFixture<LayoutBlogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations:
                [
                    LayoutCommonNavbarComponent,
                    LayoutCommonFooterComponent,
                    LayoutCommonLegalMentionsComponent,
                    LayoutCommonComponent,
                    LayoutBlogComponent,
                ],
            imports: [
                ScrollToModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
                ServicesModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutBlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
