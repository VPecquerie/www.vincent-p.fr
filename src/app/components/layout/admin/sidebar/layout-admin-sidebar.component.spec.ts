import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdminSidebarComponent } from './layout-admin-sidebar.component';
import { ServicesModule } from '../../../../modules/services.module';

describe('SidebarComponent', () => {
    let component: LayoutAdminSidebarComponent;
    let fixture: ComponentFixture<LayoutAdminSidebarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutAdminSidebarComponent],
            imports: [
                ServicesModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutAdminSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
