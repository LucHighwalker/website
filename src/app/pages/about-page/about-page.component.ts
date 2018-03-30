import {Component, OnInit} from '@angular/core';

import {GlobalData} from "../../shared/globalData.service";

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

    constructor(private globalData: GlobalData) {}

    ngOnInit() {
    }
    
    setPage(page: number) {
        this.globalData.setActivePage(page);
    }

    displayPDF(show: boolean) {
        this.globalData.displayPDF(show)
    }
}
