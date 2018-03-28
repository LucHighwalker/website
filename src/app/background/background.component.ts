import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

import {GlobalData} from "../shared/globalData.service";

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.css'],
    animations: [
        trigger('enterBG', [
            state('0', style({
                opacity: '0'
            })),
            state('1', style({
                opacity: '0.35'
            })),
            transition('0 => 1', animate('2.75s ease-out')),
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
    image: HTMLImageElement = new Image();
    bgLoaded: boolean = false;

    activePage: number;

    constructor(private globalData: GlobalData) {}

    ngOnInit() {
        this.globalData.pageChange.subscribe(page => this.activePage = page);
        
        this.image.src = 'assets/images/mountains.jpg';
        var component = this;
        this.image.onload = function () {
            component.bgLoaded = true
        }
    }

}
