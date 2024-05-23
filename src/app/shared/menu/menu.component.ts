import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  constructor(private router: Router) {
  }
  public menuItems: MenuItem[] = [];

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:
          [
            {
              label: 'Textos y fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'Números',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink:'uncommon'

            }
          ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ]
  }
}
