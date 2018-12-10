import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-layout',
    styleUrls: ['./admin.layout.component.scss'],
    templateUrl: './admin.layout.component.html'
})
export class AdminLayoutComponent implements OnInit {
    ngOnInit(): void {
        window['$'](document).ready(function () {
            window['$']('#sidebarCollapse').on('click', function () {
                window['$']('#sidebar').toggleClass('active');
                window['$'](this).toggleClass('active');
            });
        });
    }
}
