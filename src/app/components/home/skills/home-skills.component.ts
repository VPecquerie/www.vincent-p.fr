import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillGroup } from '../../../models/entities/SkillGroup';
import { SkillGroupHttpService } from '../../../services/entities/skill-group.http.service';
import { AbstractComponent } from '../../abstract.component';

@Component({
    selector: 'app-home-skills',
    templateUrl: './home-skills.component.html',
    styleUrls: ['./home-skills.component.scss'],
})
export class HomeSkillsComponent extends AbstractComponent implements OnInit, OnDestroy {
    public skillsGroups: SkillGroup[];

    constructor(private httpService: SkillGroupHttpService) {
        super();
    }

    ngOnInit(): void {
        this.subscriptions.push(this.httpService
            .readAll()
            .subscribe((groups) => this.skillsGroups = groups));
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.httpService.dispose();
    }
}
