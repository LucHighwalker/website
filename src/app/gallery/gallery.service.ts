import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class Gallery {
    public title = new Subject<string>();
    public image = new Subject<string>();
    public images = new Subject<string[]>();
    public showGallery = new Subject<boolean>();
    
    openGallery(ttl: string, img: string, imgs: string[]) {
        this.title.next(ttl);
        this.image.next(img);
        this.images.next(imgs);
        this.showGallery.next(true);
    }
    
    closeGallery() {
        this.showGallery.next(false);
    }
}