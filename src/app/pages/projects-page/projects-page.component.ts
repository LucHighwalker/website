import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {GlobalData} from '../../shared/globalData.service';
import {Project} from "../../project/project.service";

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

    constructor(private router: Router, private globalData: GlobalData, private projService: Project) {}

    ngOnInit() {
        if (this.globalData.router === undefined) {
            this.globalData.setRouter(this.router);
        }
        this.globalData.pageLoaded(2);
    }

    closeProjects() {
        this.projService.closeProjects();
    }

}
