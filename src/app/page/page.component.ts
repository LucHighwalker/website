import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/animations";
import { Router } from "@angular/router";

import { GlobalData } from "../shared/globalData.service";

@Component({
  selector: "luc-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
  animations: [
    trigger("enterPage", [
      transition("void => *", [
        animate(
          "1s ease-in",
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class PageComponent implements OnInit {
  @Input()
  pageIndex: number;

  @Input()
  pageTemplate: TemplateRef<any>;

  constructor(private router: Router, private globalData: GlobalData) {}

  ngOnInit() {
    this.globalData.setRouter(this.router);
    this.globalData.pageLoaded(this.pageIndex);
  }

  swipeLeft(event: Event) {
    this.globalData.setActivePage(this.pageIndex + 1)
  }

  swipeRight(event: Event) {
    this.globalData.setActivePage(this.pageIndex - 1)
  }
}
