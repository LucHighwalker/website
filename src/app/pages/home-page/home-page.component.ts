import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {GlobalData} from '../../shared/globalData.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    constructor(private router: Router, private globalData: GlobalData) {}

    ngOnInit() {
        if (this.globalData.router === undefined) {
            this.globalData.setRouter(this.router);
        }
        this.globalData.pageLoaded(0);
    }

}
