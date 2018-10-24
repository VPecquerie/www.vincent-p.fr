import { Component } from '@angular/core';
import { HomeContactComponentFormModel } from './home.contact.component.model';
import { HomeContactService } from './home.contact.service';

@Component({
    selector: 'app-home-contact',
    templateUrl: './home.contact.component.html',
    styleUrls: ['./home.contact.component.scss'],
    providers: [HomeContactService],
})
export class HomeContactComponent {
    public success = false;
    public error = false;

    public model: HomeContactComponentFormModel = new HomeContactComponentFormModel();

    constructor(private service: HomeContactService) {}

    onSubmit() {
        const self = this;
        this.service
            .saveForm(this.model)
            .then(() => {
                self.success = true;
                self.error = false;
            })
            .catch(() => {
                self.success = false;
                self.error = true;
            });
    }

    showForm() {
        return !this.success && !this.error;
    }
}
