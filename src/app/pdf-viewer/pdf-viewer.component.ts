import {Component, OnInit, Input} from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {GlobalData} from "../shared/globalData.service";

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-viewer.component.html',
    styleUrls: ['./pdf-viewer.component.css'],
    animations: [

        trigger('enterPDFBG', [
            state('1', style({
                opacity: '0.25'
            })),
            state('0', style({
                opacity: '0'
            })),
            transition('* => *', animate('0.35s ease')),
        ]),

        trigger('enterPDF', [
            state('1', style({
                opacity: '1'
            })),
            state('0', style({
                opacity: '0'
            })),
            transition('* => *', animate('0.5s ease')),
        ]),

        trigger('enterError', [
            state('1', style({
                transform: 'translateY(-50px)'
            })),
            state('0', style({
                transform: 'translateY(50px)'
            })),
            transition('0 => 1', animate('1.5s ease')),
            transition('1 => 0', animate('0.5s ease')),
        ]),
    ]
})
export class PdfViewerComponent implements OnInit {
    showPDF: boolean = false;
    showError: boolean = false;

    constructor(private globalData: GlobalData) {}

    ngOnInit() {
        this.globalData.showPDF.subscribe(show => this.displayPDF(show));
    }

    displayPDF(show: boolean) {
        if (show === true) {
            this.showPDF = true;
            window.setTimeout(() => {
                if (this.showPDF) {
                    this.showError = true;
                }
            }, 4200);
        } else {
            this.showPDF = false;
            this.showError = false;
        }
    }

    hidePDF() {
        this.globalData.displayPDF(false);
    }

}
