import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutAdminSidebarComponent } from './sidebar/layout-admin-sidebar.component';
import { LayoutAdminNavbarComponent } from './navbar/layout-admin-navbar.component';
import { LayoutAdminComponent } from './layout-admin.component';
import { ServicesModule } from '../../../modules/services.module';

describe('LayoutAdminComponent', () => {
    let component: LayoutAdminComponent;
    let fixture: ComponentFixture<LayoutAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutAdminSidebarComponent, LayoutAdminNavbarComponent, LayoutAdminComponent],
            imports: [ServicesModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
