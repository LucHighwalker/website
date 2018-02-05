import {Component, OnInit, TemplateRef} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

import { GlobalData } from '../shared/globalData.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    animations: [
        trigger('enterContainer', [
            transition('void => *', [
                animate(1500, keyframes([
                    style({transform: 'translateX(-100%)', opacity: 0, offset: 0}),
                    style({transform: 'translateX(-50%)', opacity: 0, offset: 0.5}),
                    style({transform: 'translateX(0)', opacity: 1, offset: 1}),
                ]))
            ]),
            transition('* => *', [
                animate(500, keyframes([
                    style({opacity: 1, offset: 0}),
                    style({opacity: 0, offset: 0.5}),
                    style({opacity: 1, offset: 1}),
                ]))
            ])
        ]),
    ]
})
export class ContainerComponent implements OnInit {

    homePageLink: string = "..shared/homePage.html"

    direction: string = 'right';

    activePage: number = 0;
    showPage: number = 0;

    constructor(private globalData: GlobalData) {}

    ngOnInit() {
        this.globalData.pageChangeSubject.subscribe(page => this.changePage(page));
    }

    changePage(page: number) {
        this.showPage = page;
        if (this.showPage < 0) {
            this.showPage = 3;
        } else if (this.showPage > 3) {
            this.showPage = 0;
        }
        window.setTimeout(() => {this.activePage = this.showPage;}, 250);
    }

}
