import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SkillGroup } from '../../../../models/entities/SkillGroup';
import { SkillForm } from '../../../../models/forms/skill.form';
import { SkillGroupHttpService } from '../../../../services/entities/skill-group.http.service';
import { SkillHttpService } from '../../../../services/entities/skill.http.service';
import { NotificationService } from '../../../../services/notification.service';
import { SeoService } from '../../../../services/seo.service';

@Component({
    templateUrl: './admin-skills-create.component.html',
    styleUrls: ['./admin-skills-create.component.scss'],
})
export class AdminSkillsCreateComponent {

    public groups: SkillGroup[];
    public createGroupMode = false;
    public skillForm = SkillForm;

    public constructor(private skillGroupHttpService: SkillGroupHttpService,
                       private skillHttpService: SkillHttpService,
                       private notification: NotificationService,
                       private router: Router,
                       private seoService: SeoService) {

        this.seoService.prependPageTitle('Rédaction d\'une compétence - Compétences - Administration');
        this.skillGroupHttpService
            .readAll()
            .subscribe(groups => this.groups = groups);
    }

    public async save() {
        const self = this;
        if (this.skillForm.valid) {

            let groupId = this.skillForm.value.group.SkillGroupId;
            if (this.createGroupMode && this.skillForm.controls['groupAdd'].valid) {
                const data = this.skillForm.controls['groupAdd'].value;
                const group = await this.skillGroupHttpService.create(data).toPromise();
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
