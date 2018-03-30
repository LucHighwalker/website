import {Component, OnInit} from '@angular/core';
import {Project} from "../../project/project.service";

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

    constructor(private projService: Project) {}

    ngOnInit() {
    }

    closeProjects() {
        this.projService.closeProjects();
    }

}
