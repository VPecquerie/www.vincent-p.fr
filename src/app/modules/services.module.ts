import { NgModule } from '@angular/core';
import { ArticleHttpService } from '../services/entities/article.http.service';
import { CompanyHttpService } from '../services/entities/company.http.service';
import { ExperienceHttpService } from '../services/entities/experience.http.service';
import { SkillHttpService } from '../services/entities/skill.http.service';
import { SkillGroupHttpService } from '../services/entities/skill-group.http.service';
import { TextEntityHttpService } from '../services/entities/text.entity.http.service';
import { TokeninfoHttpService } from '../services/entities/tokeninfo.http.service';
import { TrainingHttpService } from '../services/entities/training.http.service';
import { UserHttpService } from '../services/entities/user.http.service';
import { ContactService } from '../services/contact.service';
import { CookieService } from '../services/cookie.service';
import { FontService } from '../services/font.service';
import { NotificationService } from '../services/notification.service';
import { RoutingService } from '../services/routing.service';
import { SeoService } from '../services/seo.service';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';
import { MatomoInjector } from '../../matomo/service/matomo-injector.service';
import { MatomoTracker } from '../../matomo/service/matomo-tracker.service';


@NgModule({
    providers: [
        ArticleHttpService,
        CompanyHttpService,
        ExperienceHttpService,
        SkillHttpService,
        SkillGroupHttpService,
        TextEntityHttpService,
        TokeninfoHttpService,
        TrainingHttpService,
        UserHttpService,
        ContactService,
        CookieService,
        FontService,
        NotificationService,
        RoutingService,
        SeoService,
        UserService,
        AdminService,
        MatomoInjector,
        MatomoTracker,
    ],
    exports: [],

})
export class ServicesModule {
}
