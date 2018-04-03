import {Component, OnInit, Input} from '@angular/core';

import {trigger, state, style, transition, animate} from '@angular/animations';
import {GlobalData} from "../shared/globalData.service";

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-viewer.component.html',
    styleUrls: ['./pdf-viewer.component.css'],
    animations: [

        trigger('enterPDFBG', [
            state('0', style({
                opacity: '0'
            })),
            state('1', style({
                opacity: '0.25'
            })),
            transition('* => *', animate('0.35s ease')),
        ]),

        trigger('enterPDF', [
            state('0', style({
                transform: 'scale(0, 0)',
                opacity: '0'
            })),
            state('1', style({
                transform: 'scale(1, 1)',
                opacity: '1'
            })),
            transition('* => *', animate('0.5s ease')),
        ]),

        trigger('enterError', [
            state('0', style({
                transform: 'translateY(-100px)'
            })),
            state('1', style({
                transform: 'translateY(100px)'
            })),
            transition('0 => 1', animate('1.5s ease')),
            transition('1 => 0', animate('0.5s ease')),
        ]),
    ]
})
export class PdfViewerComponent implements OnInit {
    showPDF: boolean = false;
    showAltLink: boolean = false;
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
                    this.showAltLink = true;
                }
            }, 500);
            window.setTimeout(() => {
                if (this.showPDF) {
                    this.showError = true;
                }
            }, 4200);
        } else {
            this.showPDF = false;
            this.showAltLink = false;
            this.showError = false;
        }
    }

    hidePDF() {
        this.globalData.displayPDF(false);
    }

}
