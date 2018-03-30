import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class GlobalData {
    private activePage = 0;
    private indicatorOffset = '140px';

    public router: Router;

    public pageChange = new Subject<number>();
    public pageFade = new Subject<boolean>();

    public showPDF = new Subject<boolean>();
    public showEmail = new Subject<boolean>();

    getActivePage() {
        return this.activePage;
    }

    getIndicatorOffset() {
        return this.indicatorOffset;
    }

    setRouter(router: Router) {
        this.router = router;
    }

    pageLoaded(page: number) {
        window.setTimeout(() => {
            this.pageFade.next(false);
            this.pageChange.next(page);
        }, 100);
    }

    setActivePage(page: number) {
        if (this.router !== undefined) {
            this.pageChange.next(page);
            this.pageFade.next(true);
            window.setTimeout(() => {
                if (this.showPDF) {
                    this.showPDF.next(false);
                }
                if (this.showEmail) {
                    this.showEmail.next(false);
                }

                var url = 'not-found';
                switch (page) {
                    case 0:
                        url = 'home';
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

                this.router.navigate(['/', url]);
            }, 600);
        }
    }

    displayPDF(show: boolean) {
        this.showPDF.next(show);
    }

    displayEmail(show: boolean) {
        this.showEmail.next(show);
    }
}