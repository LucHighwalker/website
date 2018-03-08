import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { PageComponent } from './page/page.component';

import { GlobalData } from './shared/globalData.service';
import { BackgroundComponent } from './background/background.component';
import { ProjectComponent } from './project/project.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    PageComponent,
    BackgroundComponent,
    ProjectComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalData],
  bootstrap: [AppComponent]
})
export class AppModule { }
