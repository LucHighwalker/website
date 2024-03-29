import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalData {
  public router: Router;

  public currentPage: number = 0;

  public pageChange = new Subject<number>();

  public showPDF = new Subject<boolean>();
  public showEmail = new Subject<boolean>();

  setRouter(router: Router) {
    if (this.router === undefined) {
      this.router = router;
    }
  }

  pageLoaded(page: number) {
    this.pageChange.next(page);
  }

  setActivePage(page: number) {
    if (this.router !== undefined) {
      this.pageChange.next(page);

      if (this.showPDF) {
        this.showPDF.next(false);
      }
      if (this.showEmail) {
        this.showEmail.next(false);
      }

      if (page > 3) {
        page = 0;
      } else if (page < 0) {
        page = 3;
      }

      let url = 'not-found';
      switch (page) {
        case 0:
          url = '/';
          break;

        case 1:
          url = 'about';
          break;

        case 2:
          url = 'projects';
          break;

        case 3:
          url = 'contact';
          break;
      }

      this.currentPage = page;

      this.router.navigate(['/', url]);
    }
  }

  displayPDF(show: boolean) {
    this.showPDF.next(show);
  }

  displayEmail(show: boolean) {
    this.showEmail.next(show);
  }
}
