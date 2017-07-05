import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { MdSidenavModule, MdCardModule, MdListModule, MdToolbarModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    MdButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAV13tDuDS66DywLzKZ4mZXJQM2CnbRL6Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
