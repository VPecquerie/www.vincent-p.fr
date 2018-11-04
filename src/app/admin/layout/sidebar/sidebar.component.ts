import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { adminRoutes } from '../../admin.routes';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  ngOnInit() {
    this.menuItems = adminRoutes.filter(item => (item.icon != null && item.icon !== ''));
  }

  isMobileMenu() {
      if (isPlatformBrowser(this.platformId)) {
          return window['$'](window).width() < 991;
      }
      return false;
  }
}
