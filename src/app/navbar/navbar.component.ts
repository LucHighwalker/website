import { Component, OnInit } from '@angular/core';
import { GlobalData } from '../shared/globalData.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'luc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('enterBG', [
      transition('void => *', [
        animate(
          '0.5s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
            style({
              opacity: 0.75,
              transform: 'translateY(10px)',
              offset: 0.75
            }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ]),

    trigger('enterNav', [
      transition('void => *', [
        animate(
          '1s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(10px)',
              offset: 0.75
            }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ]),

    trigger('enterIndicator', [
      transition('void => *', [
        animate(
          '1s ease-in',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 0, offset: 0.5 }),
            style({ opacity: 1, offset: 1 })
          ])
        )
      ])
    ]),

    trigger('shiftIndicator', [
      state(
        '0',
        style({
          transform: 'translateX(0px)'
        })
      ),
      state(
        '1',
        style({
          transform: 'translateX(99px)'
        })
      ),
      state(
        '2',
        style({
          transform: 'translateX(199px)'
        })
      ),
      state(
        '3',
        style({
          transform: 'translateX(299px)'
        })
      ),
      state(
        '4',
        style({
          transform: 'translateX(-420px)'
        })
      ),
      transition('* => *', animate('0.35s ease'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  activePage = 0;

  constructor(private globalData: GlobalData) {}

  ngOnInit() {
    this.globalData.pageChange.subscribe(page => (this.activePage = page));
  }

  setPage(page: number) {
    if (this.activePage !== page) {
      this.globalData.setActivePage(page);
    }
  }
}
