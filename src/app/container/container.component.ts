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
                    style({opacity: 0, transform: 'translateY(-100px)', offset: 0}),
                    style({opacity: 0.75, transform: 'translateY(10px)', offset: 0.75}),
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
