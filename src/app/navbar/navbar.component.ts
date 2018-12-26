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
          '0.75s 0.99s ease-in',
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

    trigger('mouseOver', [
      state(
        '0',
        style({
          color: 'white',
          transform: 'scale(1, 1)'
        })
      ),
      state(
        '1',
        style({
          color: '#239dee',
          transform: 'scale(1.25, 1.25)'
        })
      ),
      transition('0 => 1', animate('0.75s ease')),
      transition('1 => 0', animate('1.25s ease'))
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
          transform: 'translateX(1px)'
        })
      ),
      state(
        '1',
        style({
          transform: 'translateX(103px)'
        })
      ),
      state(
        '2',
        style({
          transform: 'translateX(207px)'
        })
      ),
      state(
        '3',
        style({
          transform: 'translateX(314px)'
        })
      ),
      state(
        '4',
        style({
          transform: 'translateX(-414px)'
        })
      ),
      transition('* => *', animate('0.35s ease'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  activePage = 0;
  mouseOver: boolean[] = [false, false, false, false];

  constructor(private globalData: GlobalData) {}

  ngOnInit() {
    this.globalData.pageChange.subscribe(page => (this.activePage = page));
  }

  setPage(page: number) {
    if (this.activePage !== page) {
      this.globalData.setActivePage(page);
    }
  }

  mouseEnter(index: number) {
    this.mouseOver[index] = true;
  }

  mouseLeave(index: number) {
    this.mouseOver[index] = false;
  }

  getMouseOver(index: number) {
    return this.mouseOver[index];
  }
}
