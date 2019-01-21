import { Component, OnInit } from '@angular/core';
import { Project } from '../../project/project.service';

@Component({
  selector: 'luc-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  public projects: {}[];

  constructor(private projService: Project) {}

  ngOnInit() {
    this.projService.getJSON().subscribe(data => {
      this.projects = JSON.parse(data._body);
    });
  }

  closeProjects() {
    this.projService.closeProjects();
  }
}
