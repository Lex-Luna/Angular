import { Component } from '@angular/core';
import DashboardComponent from '../../dashboard/dashboard.component';
import { routes } from "../../app.routes"
import { run } from 'node:test';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(":"))

  constructor() {

  }

}
