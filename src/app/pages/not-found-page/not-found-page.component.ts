import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {GlobalData} from '../../shared/globalData.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private router: Router, private globalData: GlobalData) { }

  ngOnInit() {
        if (this.globalData.router === undefined) {
            this.globalData.setRouter(this.router);
        }
//        this.globalData.pageLoaded();
  }

}
