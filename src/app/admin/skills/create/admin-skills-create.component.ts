import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Skillgroup } from '../../../entities/skillgroup';
import { NotificationService } from '../../../services/notification.service';
import { SkillForm } from './admin-skills-create.form-group';
import { SkillgroupHttpService } from '../../../services/entities/skillgroup.http.service';
import { SkillHttpService } from '../../../services/entities/skill.http.service';

@Component({
    templateUrl: './admin-skills-create.component.html',
    styleUrls: ['./admin-skills-create.component.scss'],
})
export class AdminSkillsCreateComponent {

    public groups: Skillgroup[];
    public createGroupMode = false;
    public skillForm = SkillForm;

    public constructor(private skillgroupHttpService: SkillgroupHttpService,
                       private skillHttpService: SkillHttpService,
                       private notification: NotificationService,
                       private router: Router) {

        this.skillgroupHttpService
            .readAll()
            .subscribe(groups => this.groups = groups);
    }

    public async save() {
        const self = this;
        if (this.skillForm.valid) {

            let groupId = this.skillForm.value.group.SkillGroupId;
            if (this.createGroupMode && this.skillForm.controls['groupAdd'].valid) {
                const data = this.skillForm.controls['groupAdd'].value;
                const group = await this.skillgroupHttpService.create(data).toPromise();
                groupId = group.SkillGroupId;
            }

            const postData = {
                Name: this.skillForm.value.name,
                Level: this.skillForm.value.level,
                SkillGroupId: groupId,
            };

            this.skillHttpService.create(postData).subscribe(() => {
                self.router.navigate(['/admin/skills']);
            });

        } else {
            this.notification.Warning('Erreur lors de la sauvegarde', 'Formulaire Invalide');
        }
    }
}
