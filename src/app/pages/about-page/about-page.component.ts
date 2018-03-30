import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {GlobalData} from '../../shared/globalData.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private router: Router, private globalData: GlobalData) { }

  ngOnInit() {
        if (this.globalData.router === undefined) {
            this.globalData.setRouter(this.router);
        }
        this.globalData.pageLoaded(1);
  }

}
