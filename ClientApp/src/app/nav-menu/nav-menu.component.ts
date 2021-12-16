import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  styleUrls: ['./nav-menu.component.scss'],
  templateUrl: './nav-menu.component.html'
})

export class NavMenuComponent {
  constructor() { }

  dashboardRoute: string = '/dashboard'
}
