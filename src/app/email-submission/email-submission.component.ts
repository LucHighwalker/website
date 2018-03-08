import { Component, OnInit } from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {GlobalData} from "../shared/globalData.service";

@Component({
  selector: 'app-email-submission',
  templateUrl: './email-submission.component.html',
  styleUrls: ['./email-submission.component.css'],
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
export class EmailSubmissionComponent implements OnInit {

  showEmail: boolean = false;
  
  constructor(private globalData: GlobalData) { }

  ngOnInit() {
      this.globalData.showEmail.subscribe(show => this.showEmail = show);
  }
  
  hideEmail() {
      this.globalData.displayEmail(false);
  }
}
