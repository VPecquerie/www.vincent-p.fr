import { Component, Input } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
    selector: 'app-layout-admin-navbar',
    templateUrl: './layout-admin-navbar.component.html',
    styleUrls: ['./layout-admin-navbar.component.scss'],
})
export class LayoutAdminNavbarComponent {

    public constructor(public adminService: AdminService) {}

}
