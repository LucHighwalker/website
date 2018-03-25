import {Component, OnInit, Input} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
    selector: 'app-blueify',
    templateUrl: './blueify.component.html',
    styleUrls: ['./blueify.component.css'],
    animations: [
        trigger('mouseOver', [
            state('0', style({
                marginLeft: '5px',
                marginRight: '5px',
                transform: 'scale(1, 1)',
                color: 'white'
            })),
            state('1', style({
                marginLeft: '20px',
                marginRight: '20px',
                transform: 'scale(1.5, 1.5)',
                color: '#239dee'
            })),
            transition('0 => 1', animate('0.75s ease')),
            transition('1 => 0', animate('1.25s ease')),
        ]),
        
        trigger('mouseOverSpan', [
            state('0', style({
                color: 'white'
            })),
            state('1', style({
                color: '#239dee'
            })),
            transition('0 => 1', animate('0s')),
            transition('1 => 0', animate('2.35s ease')),
        ]),
    ]
})
export class BlueifyComponent implements OnInit {

    @Input()
    blueifyType: string;

    @Input()
    inlineDisplay: string;
    
    @Input()
    content: string;

    contentIdAssign: number = 0;
    mouseOver: boolean[] = [];

    constructor() {}

    ngOnInit() {
        
    }

    mouseEnter(index: number) {
        this.mouseOver[index] = true;
//        window.setTimeout(() => {
//            this.mouseOver[index] = false;
//        }, 750);
    }

    mouseLeave(index: number) {
        this.mouseOver[index] = false;
    }

    getMouseOver(index: number) {
        return this.mouseOver[index];
    }

}
