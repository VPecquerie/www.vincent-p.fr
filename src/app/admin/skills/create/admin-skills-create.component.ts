import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminSkillsService } from '../admin-skills.service';
import { Router } from '@angular/router';
import { Skillgroup } from '../../../entities/skillgroup';
import { NotificationService } from '../../../services/notification.service';

@Component({
    templateUrl: './admin-skills-create.component.html',
    styleUrls: ['./admin-skills-create.component.scss'],
})
export class AdminSkillsCreateComponent implements OnInit {

    public groups: Skillgroup[];

    public createGroupMode = false;

    public skillForm = new FormGroup({
        group: new FormControl('', []),
        name: new FormControl('', [Validators.required]),
        level: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
        groupAdd: new FormGroup({
            Name: new FormControl('', []),
            Icon: new FormControl('', []),
        }),
    });

    public constructor(private service: AdminSkillsService, private notification: NotificationService, private router: Router) {
    }

    async ngOnInit() {
        this.groups = await this.service.getSkillsGroups();
    }

    public async save() {
        const self = this;
        if (this.skillForm.valid) {
            let groupId = this.skillForm.value.group.SkillGroupId;

            if (this.createGroupMode && this.skillForm.controls['groupAdd'].valid) {
                const data = this.skillForm.controls['groupAdd'].value;
                const group = await this.service.createGroup(data);
                groupId = group.SkillGroupId;
            }
            const postData = {
                Name: this.skillForm.value.name,
                Level: this.skillForm.value.level,
                SkillGroupId: groupId,
            };

            this.service.createSkill(postData).then(() => {
                self.router.navigate(['/admin/skills']);
            });

        } else {
            this.notification.Warning('Erreur lors de la sauvegarde', 'Formulaire Invalide');
        }
    }
}
