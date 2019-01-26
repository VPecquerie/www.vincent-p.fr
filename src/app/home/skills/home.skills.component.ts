import { Component, OnInit } from '@angular/core';
import { Skillgroup } from '../../entities/skillgroup';
import { SkillgroupHttpService } from '../../services/entities/skillgroup.http.service';

@Component({
    selector: 'app-home-skills',
    templateUrl: './home.skills.component.html',
    styleUrls: ['./home.skills.component.scss'],
})
export class HomeSkillsComponent implements OnInit {
    public skillsGroups: Skillgroup[];

    constructor(private skillgroupHttpService: SkillgroupHttpService) {
    }

    ngOnInit(): void {
        this.skillgroupHttpService
            .readAll()
            .subscribe((groups) => this.skillsGroups = groups);
    }
}
