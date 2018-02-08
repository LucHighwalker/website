import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../shared/globalData.service';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
      trigger('enterBG', [
        transition('void => *', [
            animate('0.5s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-100px)', offset: 0}),
                style({opacity: 0.75, transform: 'translateY(10px)', offset: 0.75}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
        ])
      ]),
      
      trigger('enterNav', [
        transition('void => *', [
            animate('0.75s 0.99s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-100px)', offset: 0}),
                style({opacity: 0.5, transform: 'translateY(10px)', offset: 0.75}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
        ])
      ]),
      
      trigger('enterIndicator', [
        transition('void => *', [
            animate('1s ease-in', keyframes([
                style({opacity: 0, offset: 0}),
                style({opacity: 0, offset: 0.5}),
                style({opacity: 1, offset: 1}),
            ]))
        ])
      ]),
      
      trigger('shiftIndicator', [
          state('0', style({
              transform: 'translateX(0px)'
          })),
          state('1', style({
              transform: 'translateX(105px)'
          })),
          state('2', style({
              transform: 'translateX(210px)'
          })),
          state('3', style({
              transform: 'translateX(315px)'
          })),
          transition('* => *', animate('0.35s ease')),
      ]),
      
      trigger('shiftIndicator2', [
          state('0', style({
              transform: 'translateX(0px)'
          })),
          state('1', style({
              transform: 'translateX(104px)'
          })),
          state('2', style({
              transform: 'translateX(208px)'
          })),
          state('3', style({
              transform: 'translateX(312px)'
          })),
          transition('* => *', animate('0.5s ease')),
      ]),
      
      trigger('shrinkIndicator', [
        transition('* => *', [
            animate(750, keyframes([
                style({transform: 'scale(1.0)', offset: 0}),
                style({transform: 'scale(0.5)', offset: 0.5}),
                style({transform: 'scale(1.0)', offset: 1}),
            ]))
        ])
      ])
  ]
})
export class NavbarComponent implements OnInit {

  activePage: number = 0;

  constructor(private globalData: GlobalData) { }

  ngOnInit() {
      this.globalData.pageChangeSubject.subscribe(page => this.activePage = page);
  }
  
  setPage (page: number) {
      this.activePage = page;
      this.globalData.setActivePage(page);
  }

}
