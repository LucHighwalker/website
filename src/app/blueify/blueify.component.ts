import {Component, OnInit, Input} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
    selector: 'app-blueify',
    templateUrl: './blueify.component.html',
    styleUrls: ['./blueify.component.css'],
    animations: [  
        trigger('mouseOverH1', [
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
        
        trigger('mouseOverH2', [
            state('0', style({
                marginLeft: '5px',
                marginRight: '5px',
                transform: 'scale(1, 1)',
                color: 'white'
            })),
            state('1', style({
                marginLeft: '10px',
                marginRight: '10px',
                transform: 'scale(1.25, 1.25)',
                color: '#239dee'
            })),
            transition('0 => 1', animate('0.75s ease')),
            transition('1 => 0', animate('1.25s ease')),
        ]),
        
        trigger('mouseOverH3', [
            state('0', style({
                marginLeft: '3px',
                marginRight: '3px',
                transform: 'scale(1, 1)',
                color: 'white'
            })),
            state('1', style({
                marginLeft: '5px',
                marginRight: '5px',
                transform: 'scale(1.1, 1.1)',
                color: '#239dee'
            })),
            transition('0 => 1', animate('0.75s ease')),
            transition('1 => 0', animate('1.25s ease')),
        ]),
        
        trigger('mouseOverSpan', [
            state('0', style({
                marginLeft: '3px',
                marginRight: '3px',
                transform: 'scale(1, 1)',
                color: 'white'
            })),
            state('1', style({
                marginLeft: '5px',
                marginRight: '5px',
                transform: 'scale(1.1, 1.1)',
                color: '#239dee'
            })),
            transition('0 => 1', animate('0.75s ease')),
            transition('1 => 0', animate('1.25s ease')),
        ]),
        
        trigger('mouseOverP', [
            state('0', style({
                transform: 'scale(1, 1)',
                color: 'white'
            })),
            state('1', style({
                transform: 'scale(1.05, 1.05)',
                color: '#239dee'
            })),
            transition('0 => 1', animate('0.1s')),
            transition('1 => 0', animate('2.35s ease')),
        ]),
    ]
})
export class BlueifyComponent implements OnInit {

    @Input()
    blueifyType: string;
    
    @Input()
    content: string;
    
    @Input()
    overrideHover: boolean;

    mouseOver: boolean[] = [];
    contentArray: string[];

    constructor() {}

    ngOnInit() {
        this.contentArray = this.content.split(" ");
    }

    mouseEnter(index: number) {
        this.mouseOver[index] = true;
    }

    mouseLeave(index: number) {
        this.mouseOver[index] = false;
    }

    getMouseOver(index: number) {
        return (this.mouseOver[index] || this.overrideHover) ? true : false;
    }
    
    getTemplate(h1: any, h2: any, h3: any, span: any, p: any, phone: any, email: any) {
        switch (this.blueifyType) {
            case 'h1':
                return h1;
                
            case 'h2':
                return h2;
                
            case 'h3':
                return h3;
                
            case 'span':
                return span;
                
            case 'p':
                return p;
                
            case 'phone':
                return phone;
                
            case 'email':
                return email;
        }
    }
}
