import {Component, OnInit} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {GlobalData} from "../shared/globalData.service";

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.css'],
    animations: [
        trigger('enterBG', [
            transition('void => *', [
                animate(750, keyframes([
                    style({opacity: 0, offset: 0}),
                    style({opacity: 0.35, offset: 1}),
                ]))
            ])
        ]),

        trigger('shiftBG', [
            state('0', style({
                transform: 'translateX(-50px)'
            })),
            state('1', style({
                transform: 'translateX(-100px)'
            })),
            state('2', style({
                transform: 'translateX(-150px)'
            })),
            state('3', style({
                transform: 'translateX(-200px)'
            })),
            transition('* => *', animate('1.5s ease')),
        ]),
    ]
})
export class BackgroundComponent implements OnInit {

    activePage: number;

    constructor(private globalData: GlobalData) {}

    ngOnInit() {
        this.globalData.pageChange.subscribe(page => this.activePage = page);
    }

}
