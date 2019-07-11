import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeAboutComponent } from './about/home.about.component';
import { HomeCookieComponent } from './cookie/home.cookie.component';
import { HomeExperienceComponent } from './experience/home.experience.component';
import { HomeSkillsComponent } from './skills/home.skills.component';
import { HomeTrainingsComponent } from './trainings/home.trainings.component';
import { HomeContactComponent } from './contact/home.contact.component';
import { LegalMentionsComponent } from './legal-mentions/legal-mentions.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MyMaterialModule } from '../my-material/my-material.module';
import { HomeTopbarComponent } from './topbar/home.topbar.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HomeSplashScreenComponent } from './splashscreen/home.splashscreen.component';
import { TextEntityHttpService } from '../services/entities/text.entity.http.service';
import { TrainingHttpService } from '../services/entities/training.http.service';
import { SkillgroupHttpService } from '../services/entities/skillgroup.http.service';
import { ExperienceHttpService } from '../services/entities/experience.http.service';
import { HomeContactService } from './contact/home.contact.service';
import { CookieService } from '../services/cookie.service';
import { RoutingService } from '../services/routing.service';
import { MatomoInjector } from '../../matomo/service/matomo-injector.service';
import { MatomoTracker } from '../../matomo/service/matomo-tracker.service';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                TextEntityHttpService,
                TrainingHttpService,
                SkillgroupHttpService,
                ExperienceHttpService,
                HomeContactService,
                CookieService,
                RoutingService,
                MatomoInjector,
                MatomoTracker,
            ],
            declarations: [
                HomeTopbarComponent,
                HomeAboutComponent,
                HomeContactComponent,
                HomeCookieComponent,
                HomeExperienceComponent,
                HomeSkillsComponent,
                HomeTrainingsComponent,
                HomeSplashScreenComponent,
                LegalMentionsComponent,
                HomeComponent,
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MyMaterialModule,
                ScrollToModule.forRoot(),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
