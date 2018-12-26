import { Component, OnInit, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

import { ProjectInfo } from './projectInfo';
import { Project } from './project.service';
import { GlobalData } from '../shared/globalData.service';

@Component({
  selector: 'luc-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
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
          transform: 'scale(1.1, 1.1)',
          color: '#239dee',
          borderColor: '#239dee'
        })
      ),
      transition('0 => 1', animate('0.75s ease')),
      transition('1 => 0', animate('1.25s ease'))
    ]),

    trigger('expand', [
      state(
        '0',
        style({
          height: '0',
          transform: 'scale(0, 0)'
        })
      ),
      state(
        '1',
        style({
          transform: 'scale(1, 1)'
        })
      ),
      transition('0 => 1', animate('0.35s ease')),
      transition('1 => 0', animate('0.75s ease'))
    ])
  ]
})
export class ProjectComponent implements OnInit {
  expanded = false;
  hideTitleImg = false;
  mouseOver = false;

  activeImg = 'assets/images/navBG.png';

  disabled = false;

  @Input()
  projectID: number;

  @Input()
  project: ProjectInfo = new ProjectInfo();

  constructor(private service: Project, private globalData: GlobalData) {}

  ngOnInit() {
    this.projectID = this.service.assignID();

    this.service.projectSelected.subscribe(id => {
      if (this.expanded === true && this.projectID !== id) {
        this.expanded = false;
      } else if (this.expanded === false && this.projectID === id) {
        this.expanded = true;
      }
    });

    this.globalData.pageChange.subscribe(() => {
      this.expanded = false;
      this.disabled = false;
    });

    if (this.project.image === undefined) {
      this.project.image = 'assets/images/null.jpg';
      this.hideTitleImg = true;
    }
  }

  mouseEnter() {
    this.mouseOver = true;
  }

  mouseLeave() {
    this.mouseOver = false;
  }

  expand() {
    if (this.disabled === false) {
      if (this.expanded) {
        this.service.closeProjects();
      } else {
        this.service.expandProject(this.projectID);
      }

      // workaround to disable false double clicks. TODO: solve root issue.
      this.disabled = true;
      window.setTimeout(() => {
        this.disabled = false;
      }, 250);
    }
  }
}
