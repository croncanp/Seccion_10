import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {

  public nameLower: string = 'cristian'
  public nameUpper: string = 'CRISTIAN'
  public fullName: string = 'cristian camilo RoNcanciO pEñA'

  public customDate: Date = new Date();

}
