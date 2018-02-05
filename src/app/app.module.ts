import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RollerComponent } from './roller/roller.component';
import { ContainerComponent } from './container/container.component';

import { GlobalData } from './shared/globalData.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RollerComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalData],
  bootstrap: [AppComponent]
})
export class AppModule { }
