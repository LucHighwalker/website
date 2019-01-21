import { Component, OnInit, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'luc-blueify',
  templateUrl: './blueify.component.html',
  styleUrls: ['./blueify.component.scss']
})
export class BlueifyComponent implements OnInit {
  @Input()
  blueifyType: string;

  @Input()
  content: string;

  @Input()
  overrideHover: boolean;

  contentArray: string[];

  constructor() {}

  ngOnInit() {
    this.contentArray = this.content.split(' ');
  }

  getTemplate(
    h1: any,
    h2: any,
    h3: any,
    span: any,
    p: any,
    phone: any,
    email: any,
    linked: any
  ) {
    switch (this.blueifyType) {
      case 'h1':
        return h1;

      case 'h2':
        return h2;

      case 'h3':
        return h3;

      case 'span':
        return span;

      case 'p':
        return p;

      case 'phone':
        return phone;

      case 'email':
        return email;

      case 'linked':
        return linked;
    }
  }
}
