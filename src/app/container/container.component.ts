import {Component, OnInit, TemplateRef} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

import {GlobalData} from '../shared/globalData.service';
import {Project} from "../project/project.service";

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
    direction: string = 'right';

    activePage: number = 0;
    showPage: number = 0;
    
    showPDF: boolean = false;
    showEmail: boolean = false;

    constructor(private globalData: GlobalData, private projService: Project) {}

    ngOnInit() {
        this.globalData.pageChange.subscribe(page => this.changePage(page));
        this.globalData.showPDF.subscribe(show => this.showPDF = show);
        this.globalData.showEmail.subscribe(show => this.showEmail = show);
    }

    changePage(page: number) {
        this.showPage = page;
        window.setTimeout(() => {
            this.activePage = this.showPage;
            if (this.showPDF === true) {
                this.globalData.displayPDF(false);
            }
            if (this.showEmail === true) {
                this.globalData.displayEmail(false);
            }
        }, 250);
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
