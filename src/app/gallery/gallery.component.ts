import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

import { Gallery } from './gallery.service';
import { GlobalData } from '../shared/globalData.service';

@Component({
  selector: 'luc-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('enterGalleryBG', [
      state(
        '0',
        style({
          opacity: '0'
        })
      ),
      state(
        '1',
        style({
          opacity: '0.25'
        })
      ),
      transition('* => *', animate('0.35s ease'))
    ]),

    trigger('enterGallery', [
      state(
        '0',
        style({
          transform: 'scale(0, 0)',
          opacity: '0'
        })
      ),
      state(
        '1',
        style({
          transform: 'scale(1, 1)',
          opacity: '1'
        })
      ),
      transition('* => *', animate('0.5s ease'))
    ])
  ]
})
export class GalleryComponent implements OnInit {
  title: string;
  imageIndex: number;
  images: string[] = ['assets/images/null.jpg'];

  showGallery = false;

  constructor(private service: Gallery, private globalData: GlobalData) {}

  ngOnInit() {
    this.service.title.subscribe(ttl => (this.title = ttl));
    this.service.images.subscribe(imgs => (this.images = imgs));
    this.service.image.subscribe(img => this.indexImage(img));
    this.service.showGallery.subscribe(show => (this.showGallery = show));
    this.globalData.pageChange.subscribe(() => {
      this.closeGallery();
    });
  }

  indexImage(img: string) {
    this.imageIndex = this.images.indexOf(img);
  }

  displayImg(arg: string) {
    switch (arg) {
      case 'current':
        const ret = this.images[this.imageIndex];
        if (ret !== undefined) {
          return ret;
        } else {
          return 'assets/images/null.jpg';
        }

      case 'first':
        this.imageIndex = 0;
        break;

      case 'previous':
        this.imageIndex--;
        if (this.imageIndex < 0) {
          this.imageIndex = this.images.length - 1;
        }
        break;

      case 'next':
        this.imageIndex++;
        if (this.imageIndex >= this.images.length) {
          this.imageIndex = 0;
        }
        break;

      case 'last':
        this.imageIndex = this.images.length - 1;
        break;
    }
  }

  selectImg(img: string) {
    this.service.showImage(img);
  }

  isSelected(img: string) {
    if (img === this.images[this.imageIndex]) {
      return true;
    } else {
      return false;
    }
  }

  closeGallery() {
    this.service.closeGallery();
  }
}
