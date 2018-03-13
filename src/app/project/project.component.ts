import { Component, OnInit, Input } from '@angular/core';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

import {ProjectInfo} from "./projectInfo";
import {Project} from "./project.service";
import {GlobalData} from "../shared/globalData.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
  
      trigger('expand', [
            state('0', style({
                height: '0',
                transform: 'scale(0, 0)'
            })),
            state('1', style({
                height: 'auto',
                transform: 'scale(1, 1)'
            })),
            transition('* => *', animate('0.35s ease')),
        ]),
  ]
})
export class ProjectComponent implements OnInit {
  expanded: boolean = false;
  hideTitleImg: boolean = false;
  
  activeImg: string = 'assets/images/navBG.png';
    
  @Input()
  projectID: number;
  
  @Input()
  project: ProjectInfo = new ProjectInfo();

  constructor(private service: Project, private globalData: GlobalData) { }

  ngOnInit() {
      this.projectID = this.service.assignID(this.project.title);
      
      this.service.projectSelected.subscribe(id => {
          if (this.expanded === true && this.projectID !== id) {
              this.expanded = false;
          }
      });
      
      this.globalData.pageChange.subscribe(() => {
          this.expanded = false;
      });
      
      if (this.project.image === undefined) {
          this.project.image = 'assets/images/navBG.png';
          this.hideTitleImg = true;
      }
  }
  
  expand() {
      this.expanded = !this.expanded;
      if (this.expanded === true) {
          this.service.expandProject(this.projectID);
      }
  }
}
