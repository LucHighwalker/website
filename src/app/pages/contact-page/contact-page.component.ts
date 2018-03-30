import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {GlobalData} from '../../shared/globalData.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private router: Router, private globalData: GlobalData) { }

  ngOnInit() {
        if (this.globalData.router === undefined) {
            this.globalData.setRouter(this.router);
        }
        this.globalData.pageLoaded(3);
  }

}
