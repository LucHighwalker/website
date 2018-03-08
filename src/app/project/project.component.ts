import { Component, OnInit } from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
  
      trigger('expand', [
            state('0', style({
                width: '50%',
                height: '200px',
                margin: '0 25%'
            })),
            state('1', style({
                width: '95%',
                height: '400px',
                margin: '0 2.5%'
            })),
            transition('* => *', animate('0.35s ease')),
        ]),
  ]
})
export class ProjectComponent implements OnInit {

  expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  expand() {
      this.expanded = !this.expanded;
  }

}
