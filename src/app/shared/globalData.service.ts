import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class GlobalData {
    private activePage = 0;
    private indicatorOffset = '140px';
    
    public pageChange = new Subject<number>();
    
    public showPDF = new Subject<boolean>();
    public showEmail = new Subject<boolean>();

    getActivePage() {
        return this.activePage;
    }

    getIndicatorOffset() {
        return this.indicatorOffset;
    }

    setActivePage(page: number) {
        this.pageChange.next(page);
    }
    
    displayPDF(show: boolean) {
        this.showPDF.next(show);
    }
    
    displayEmail(show: boolean) {
        this.showEmail.next(show);
    }
}