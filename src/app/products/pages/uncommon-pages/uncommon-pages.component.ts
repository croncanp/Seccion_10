import { Component } from '@angular/core';
import {interval, tap} from 'rxjs';
import {resolve} from 'node:path';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {

  //i18nSelect
  public name: string = 'Cristian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void{
    this.name = 'Carolina';
    this.gender = 'female';
  }
  // Fin i18nSelect

  // i18nPlural
  public clients: string[] = ['Cristian', 'Carolina', 'Diana', 'Andres', 'Mateo', 'Adriana'];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando'
  }

  public deleteClient(): void{
    this.clients.shift();
  }

  // fin i18nPlural

  // KeyValue

  public person = {
    name: 'Cristian',
    age: 30,
    address: 'Bogotá'
  }
  // Fin KeyValue

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap: ', value)),
  );

  public  promiseValue: Promise<string> = new Promise(( resolve , reject ) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    },3500)
  })
  // Fin Async pipe
}
