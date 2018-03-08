import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class GlobalData {
    private activePage = 0;
    private indicatorOffset = '140px';
    
    public pageChangeSubject = new Subject<any>();
    public showPDF = new Subject<boolean>();

    getActivePage() {
        return this.activePage;
    }

    getIndicatorOffset() {
        return this.indicatorOffset;
    }

    setActivePage(page: number) {
        this.pageChangeSubject.next(page);
    }
    
    displayPDF(show: boolean) {
        this.showPDF.next(show);
    }
}