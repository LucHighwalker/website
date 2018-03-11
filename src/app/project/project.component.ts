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
  showFullView: boolean = false;
  
  activeImg: string = 'assets/images/navBG.png';
    
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
  
  expandImg(img: string) {
      this.activeImg = img;
      this.showFullView = true;
  }
  
  closeGallery() {
      this.activeImg = 'assets/images/navBG.png';
      this.showFullView = false;
  }

}
