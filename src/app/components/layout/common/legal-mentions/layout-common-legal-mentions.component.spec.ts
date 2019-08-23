import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutCommonLegalMentionsComponent } from './layout-common-legal-mentions.component';


describe('LegalMentionsComponent', () => {
    let component: LayoutCommonLegalMentionsComponent;
    let fixture: ComponentFixture<LayoutCommonLegalMentionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutCommonLegalMentionsComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutCommonLegalMentionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
