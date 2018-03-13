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
        this.images.next(imgs);
        this.image.next(img);
        this.showGallery.next(true);
    }
    
    showImage(img: string) {
        this.image.next(img);
    }
    
    closeGallery() {
        this.showGallery.next(false);
    }
}