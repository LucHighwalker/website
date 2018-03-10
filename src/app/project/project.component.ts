import { Component, OnInit, Input } from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

import {ProjectInfo} from "./projectInfo";
import {GlobalData} from '../shared/globalData.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
  
      trigger('expand', [
            state('0', style({
                height: '0px',
                transform: 'scale(0, 0)'
            })),
            state('1', style({
                height: '500px',
                transform: 'scale(1, 1)'
            })),
            transition('* => *', animate('0.35s ease')),
        ]),
  ]
})
export class ProjectComponent implements OnInit {

  expanded: boolean = false;
  
  @Input()
  projectID: number;
  
  @Input()
  project: ProjectInfo = new ProjectInfo();

  constructor(private globalData: GlobalData) { }

  ngOnInit() {
      this.globalData.projectSelected.subscribe(id => {
          if (this.projectID !== id) {
              this.expanded = false;
          }
      });
  }
  
  expand() {
      this.expanded = !this.expanded;
      if (this.expanded === true) {
          this.globalData.expandProject(this.projectID);
      }
  }

}
