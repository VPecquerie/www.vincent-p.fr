import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdminNavbarComponent } from './layout-admin-navbar.component';
import { ServicesModule } from '../../../../modules/services.module';

describe('LayoutAdminNavbarComponent', () => {
    let component: LayoutAdminNavbarComponent;
    let fixture: ComponentFixture<LayoutAdminNavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutAdminNavbarComponent],
            imports: [ServicesModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutAdminNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
