import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Skill } from '../../../../models/entities/skill';
import { SkillHttpService } from '../../../../services/entities/skill.http.service';
import { SeoService } from '../../../../services/seo.service';
import { SkillGroup } from '../../../../models/entities/SkillGroup';
import { SkillGroupHttpService } from '../../../../services/entities/skill-group.http.service';


@Component({
    templateUrl: './admin-skills-list.component.html',
    styleUrls: ['./admin-skills-list.component.scss'],
})
export class AdminSkillsListComponent implements OnInit {
    public skillsGroups: SkillGroup[];
    public form: Skill;

    constructor(private skillGroupHttpService: SkillGroupHttpService,
                private skillHttpService: SkillHttpService,
                private seoService: SeoService) {
        this.seoService.prependPageTitle('Rédaction d\'une compétence - Compétences - Administration');
    }

    ngOnInit(): void {
        this.loadSkills();
    }

    loadSkills() {
        const self = this;
        this.skillGroupHttpService.readAll().subscribe((groups) => self.skillsGroups = groups);
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

    deleteGroup(group: SkillGroup) {
        const self = this;
        this.skillGroupHttpService.delete(group.SkillGroupId).subscribe(() => {
            self.loadSkills();
        });
        return false;
    }
}
