import {Component, OnInit, TemplateRef} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

import {GlobalData} from '../shared/globalData.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    animations: [

        trigger('enterContainer', [
            transition('void => *', [
                animate('1s ease-in', keyframes([
                    style({opacity: 0, transform: 'translateY(-50px)', offset: 0}),
                    style({opacity: 0.25, transform: 'translateY(-15px)', offset: 0.5}),
                    style({opacity: 0.75, transform: 'translateY(5px)', offset: 0.75}),
                    style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                ]))
            ]),
            transition('* => *', [
                animate('0.75s ease-out', keyframes([
                    style({opacity: 1, offset: 0}),
                    style({opacity: 0, offset: 0.5}),
                    style({opacity: 1, offset: 1}),
                ]))
            ])
        ]),

        trigger('enterPDFBG', [
            state('true', style({
                opacity: '0.25'
            })),
            state('false', style({
                opacity: '0'
            })),
            transition('* => *', animate('0.35s ease')),
        ]),

        trigger('enterPDF', [
            state('true', style({
                opacity: '1'
            })),
            state('false', style({
                opacity: '0'
            })),
            transition('* => *', animate('1.5s ease')),
        ]),
    ]
})
export class ContainerComponent implements OnInit {
    direction: string = 'right';

    activePage: number = 0;
    showPage: number = 0;

    //----- about page vars
    displayPDF: boolean = false;
    hidePDF: boolean = true;

    constructor(private globalData: GlobalData) {}

    ngOnInit() {
        this.globalData.pageChangeSubject.subscribe(page => this.changePage(page));
    }

    changePage(page: number) {
        this.showPage = page;
        window.setTimeout(() => {
            this.activePage = this.showPage;
            this.displayPDF = false;
        }, 250);
    }

    setPage(page: number) {
        this.globalData.setActivePage(page);
    }

    //------ about page functions

    showPDF(bool: boolean) {
        this.displayPDF = bool;
        window.setTimeout(() => {this.hidePDF = !this.displayPDF;}, 250);
    }
}
