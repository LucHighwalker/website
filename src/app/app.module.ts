import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';

import { GlobalData } from './shared/globalData.service';
import { Gallery } from './gallery/gallery.service';
import { Project } from './project/project.service';
import { BackgroundComponent } from './background/background.component';
import { ProjectComponent } from './project/project.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryPreviewComponent } from './gallery-preview/gallery-preview.component';
import { BlueifyComponent } from './blueify/blueify.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PictureComponent } from './picture/picture.component';

export class CustomHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'pinch': { enable: false },
        'rotate': { enable: false }
    }
}


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PageComponent,
        BackgroundComponent,
        ProjectComponent,
        PdfViewerComponent,
        GalleryComponent,
        GalleryPreviewComponent,
        BlueifyComponent,
        ButtonsComponent,
        HomePageComponent,
        AboutPageComponent,
        ProjectsPageComponent,
        ContactPageComponent,
        NotFoundPageComponent,
        PictureComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', component: HomePageComponent },
            { path: 'about', component: AboutPageComponent },
            { path: 'projects', component: ProjectsPageComponent },
            { path: 'contact', component: ContactPageComponent },
            { path: '**', component: NotFoundPageComponent },
        ])
    ],
    providers: [
        GlobalData,
        Gallery,
        Project,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: CustomHammerConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
