import {Component, OnInit, Input, TemplateRef} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {Router} from '@angular/router';

import {GlobalData} from '../shared/globalData.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
    animations: [

        trigger('enterPage', [
            transition('void => *', [
                animate('1s ease-in', keyframes([
                    style({opacity: 0, offset: 0}),
                    style({opacity: 1, offset: 1}),
                ]))
            ])
        ]),
    ]
})
export class PageComponent implements OnInit {

    @Input()
    pageIndex: number;
    
    @Input()
    pageTemplate: TemplateRef<any>;

    constructor(private router: Router, private globalData: GlobalData) {}

    ngOnInit() {
        if (this.globalData.router === undefined) {
            this.globalData.setRouter(this.router);
        }
        this.globalData.pageLoaded(this.pageIndex);
    }
    
    

}
