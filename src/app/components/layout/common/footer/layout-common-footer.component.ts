import { Component } from '@angular/core';
import { ContactService } from '../../../../services/contact.service';
import { ContactForm } from '../../../../models/forms/contact.form';
import { NotificationService } from '../../../../services/notification.service';

@Component({
    selector: 'app-common-layout-footer',
    templateUrl: './layout-common-footer.component.html',
    styleUrls: ['./layout-common-footer.component.scss'],
    providers: [ContactService],
})
export class LayoutCommonFooterComponent {
    public success = false;
    public error = false;

    public form = ContactForm;

    constructor(private service: ContactService, private notificationService: NotificationService) {
    }

    onSubmit() {
        if (this.form.valid) {
            const self = this;
            this.service
                .saveForm(this.form.getRawValue())
                .then(() => {
                    self.success = true;
                    self.error = false;
                })
                .catch(() => {
                    self.success = false;
                    self.error = true;
                });
        } else {
            this.notificationService.Warning('Formulaire Invalid', 'Le contenu du formulaire est invalide');
        }
    }

}
