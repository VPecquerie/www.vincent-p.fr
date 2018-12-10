import { Component, OnInit } from '@angular/core';
import { HomeSkillsService } from './home.skills.service';
import { Skillgroup } from '../../entities/skillgroup';

@Component({
    selector: 'app-home-skills',
    templateUrl: './home.skills.component.html',
    styleUrls: ['./home.skills.component.scss'],
})
export class HomeSkillsComponent implements OnInit {
    public skillsGroups: Skillgroup[];

    constructor(private skillsService: HomeSkillsService) {}

    ngOnInit(): void {
        this.skillsService
            .getSkills()
            .subscribe((groups) => this.skillsGroups = groups);
    }
}
