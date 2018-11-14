import { Component, OnInit } from '@angular/core';
import { AdminSkillsService } from '../admin-skills.service';
import * as _ from 'lodash';
import { Skillgroup } from '../../../entities/skillgroup';
import { Skill } from '../../../entities/skill';

@Component({
    templateUrl: './admin-skills-list.component.html',
    styleUrls: ['./admin-skills-list.component.scss'],
})
export class AdminSkillsListComponent implements OnInit {
    public skillsGroups: Skillgroup[];
    public form: Skill;

    constructor(private service: AdminSkillsService) {
    }

    ngOnInit(): void {
        this.loadSkills();
    }

    loadSkills() {
        const self = this;
        this.service.getSkillsGroups().then((groups) => self.skillsGroups = groups);
    }

    openEditMode(skill): boolean {
        skill['edit'] = true;
        this.form = _.clone(skill);

        return false;
    }

    cancelEditMode(skill: Skill): boolean {
        delete this.form;
        skill['edit'] = false;
        return false;
    }

    saveSkill(skill: Skill) {
        const self = this;
        const postData = {
            Name: skill.Name,
            Level: skill.Level,
        };
        this.service.updateSkill(skill.SkillId, postData).then(() => {
            self.loadSkills();
        });

        return false;
    }

    deleteSkill(skill: Skill) {
        const self = this;
        this.service.deleteSkill(skill.SkillId).then(() => {
            self.loadSkills();
        });

        return false;
    }

    deleteGroup(group: Skillgroup) {
        const self = this;
        this.service.deleteGroup(group.SkillGroupId).then(() => {
            self.loadSkills();
        });

        return false;
    }
}
