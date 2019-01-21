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
  selector: 'luc-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  toDo: Function;

  @Input()
  value: any;

  constructor(private globalData: GlobalData) {}

  ngOnInit() {}
}
