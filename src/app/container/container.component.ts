import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

import {GlobalData} from '../shared/globalData.service';
import {Project} from "../project/project.service";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    animations: [

        trigger('enterContainer', [
            state('void', style({
                opacity: '0'
            })),
            state('false', style({
                opacity: '1'
            })),
            state('true', style({
                opacity: '0'
            })),
            transition('* => *', animate('0.5s ease')),
        ]),

        trigger('enterBoxBG', [
            state('true', style({
                opacity: '0.25'
            })),
            state('false', style({
                opacity: '0'
            })),
            transition('* => *', animate('0.35s ease')),
        ]),

        trigger('enterBox', [
            state('true', style({
                opacity: '1'
            })),
            state('false', style({
                opacity: '0'
            })),
            transition('* => *', animate('0.5s ease')),
        ]),
    ]
})
export class ContainerComponent implements OnInit {
    activePage: number = 0;
    showPage: number = 0;
    
    pageFade: boolean = false;

    showPDF: boolean = false;
    showEmail: boolean = false;

    constructor(private router: Router, private globalData: GlobalData, private projService: Project) {}

    ngOnInit() {
//        this.globalData.pageChange.subscribe(page => this.changePage(page));
        this.globalData.pageFade.subscribe(fade => this.pageFade = fade);
        this.globalData.showPDF.subscribe(show => this.showPDF = show);
        this.globalData.showEmail.subscribe(show => this.showEmail = show);
    }

    changePage(page: number) {
//        this.showPage = page;
//        window.setTimeout(() => {
//            //            this.activePage = this.showPage;
//            if (this.showPDF === true) {
//                this.globalData.displayPDF(false);
//            }
//            if (this.showEmail === true) {
//                this.globalData.displayEmail(false);
//            }
//
//            var url = 'not-found';
//            switch (page) {
//                case 0:
//                url = 'home';
//                    break;
//
//                case 1:
//                url = 'about';
//                    break;
//
//                case 2:
//                url = 'projects';
//                    break;
//
//                case 3:
//                url = 'contact';
//                    break;
//            }
//
//            this.router.navigate(['/', url]);
//        }, 250);
    }

    setPage(page: number) {
        this.globalData.setActivePage(page);
    }

    //------ about page functions

    displayPDF(bool: boolean) {
        this.globalData.displayPDF(bool);
    }

    displayEmail(bool: boolean) {
        this.globalData.displayEmail(bool);
    }

    //------- projects functions

    closeProjects() {
        this.projService.closeProjects();
    }
}
