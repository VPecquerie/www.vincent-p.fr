import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCookieComponent } from './home.cookie.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../../my-material/my-material.module';
import { CookieService } from '../../services/cookie.service';
import { RoutingService } from '../../services/routing.service';
import { MatomoTracker } from '../../../matomo/service/matomo-tracker.service';
import { MatomoInjector } from '../../../matomo/service/matomo-injector.service';

describe('HomeCookieComponent', () => {
    let component: HomeCookieComponent;
    let fixture: ComponentFixture<HomeCookieComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeCookieComponent],
            providers: [MatomoTracker, MatomoInjector, RoutingService, CookieService],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeCookieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
