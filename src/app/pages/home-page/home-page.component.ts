import { Component, OnInit } from '@angular/core';

import { GlobalData } from '../../shared/globalData.service';

@Component({
  selector: 'luc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private globalData: GlobalData) {}

  ngOnInit() {}

  setPage(page: number) {
    this.globalData.setActivePage(page);
  }
}
