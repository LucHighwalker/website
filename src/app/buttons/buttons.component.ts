import { Component, OnInit, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

import { GlobalData } from '../shared/globalData.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  animations: [
    trigger('mouseOver', [
      state(
        '0',
        style({
          transform: 'scale(1, 1)',
          color: 'white',
          borderColor: 'white'
        })
      ),
      state(
        '1',
        style({
          transform: 'scale(1.25, 1.25)',
          color: '#239dee',
          borderColor: '#239dee'
        })
      ),
      transition('0 => 1', animate('0.75s ease')),
      transition('1 => 0', animate('1.25s ease'))
    ])
  ]
})
export class ButtonsComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  toDo: Function;

  @Input()
  value: any;

  mouseOver: boolean;

  constructor(private globalData: GlobalData) {}

  ngOnInit() {}

  mouseEnter() {
    this.mouseOver = true;
  }

  mouseLeave() {
    this.mouseOver = false;
  }
}
