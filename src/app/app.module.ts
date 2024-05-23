import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Configuración del idioma local para la aplicación un idioma en especifico para el uso con pipes
import localEsCO from '@angular/common/locales/es-CO';
import localFrCA from '@angular/common/locales/fr-CA';

import {registerLocaleData} from '@angular/common';

registerLocaleData(localEsCO);
registerLocaleData(localFrCA);
//Fin de la implementacón
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO' // Esta linea se utiliza para definir el idioma de las fechas a nivel de toda la aplicación
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
