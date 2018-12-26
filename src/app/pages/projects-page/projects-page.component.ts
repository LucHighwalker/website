import { Component, OnInit } from '@angular/core';
import { Project } from '../../project/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
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
