import { Component, OnInit } from '@angular/core';
import { Skillgroup } from '../../../entities/skillgroup';
import { Skill } from '../../../entities/skill';
import { SkillgroupHttpService } from '../../../services/entities/skillgroup.http.service';
import { SkillHttpService } from '../../../services/entities/skill.http.service';

import * as _ from 'lodash';
import { SEOService } from '../../../services/seo.service';

@Component({
    templateUrl: './admin-skills-list.component.html',
    styleUrls: ['./admin-skills-list.component.scss'],
})
export class AdminSkillsListComponent implements OnInit {
    public skillsGroups: Skillgroup[];
    public form: Skill;

    constructor(private skillgroupHttpService: SkillgroupHttpService,
                private skillHttpService: SkillHttpService,
                private seoService: SEOService) {
        this.seoService.prependPageTitle('Rédaction d\'une compétence - Compétences - Administration');
    }

    ngOnInit(): void {
        this.loadSkills();
    }

    loadSkills() {
        const self = this;
        this.skillgroupHttpService.readAll().subscribe((groups) => self.skillsGroups = groups);
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
        this.skillHttpService.update(skill.SkillId, skill).subscribe(() => {
            self.loadSkills();
        });
        return false;
    }

    deleteSkill(skill: Skill) {
        const self = this;
        this.skillHttpService.delete(skill.SkillId).subscribe(() => {
            self.loadSkills();
        });
        return false;
    }

    deleteGroup(group: Skillgroup) {
        const self = this;
        this.skillgroupHttpService.delete(group.SkillGroupId).subscribe(() => {
            self.loadSkills();
        });
        return false;
    }
}
