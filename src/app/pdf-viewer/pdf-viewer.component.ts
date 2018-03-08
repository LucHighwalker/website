import { Component, OnInit, Input } from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {GlobalData} from "../shared/globalData.service";

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'],
  animations: [

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
export class PdfViewerComponent implements OnInit {
  showPDF: boolean = false;
  
  constructor(private globalData: GlobalData) { }

  ngOnInit() {
      this.globalData.showPDF.subscribe(show => this.showPDF = show);
  }
  
  hidePDF() {
      this.globalData.displayPDF(false);
  }

}
