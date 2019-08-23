import { Component, Input } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
    selector: 'app-layout-admin-sidebar',
    templateUrl: './layout-admin-sidebar.component.html',
    styleUrls: ['./layout-admin-sidebar.component.scss'],
})
export class LayoutAdminSidebarComponent {

    public constructor(public adminService: AdminService) {}
}
