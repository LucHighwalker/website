import { Component, OnInit, Input } from '@angular/core';
import {Gallery} from "./gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  title: string;
  image: string;
  images: string[];
  
  showGallery: boolean = false;

  constructor(private service: Gallery) { }

  ngOnInit() {
      this.service.title.subscribe(ttl => this.title = ttl);
      this.service.image.subscribe(img => this.image = img);
      this.service.images.subscribe(imgs => this.images = imgs);
      this.service.showGallery.subscribe(show => this.showGallery = show);
  }
  
  selectImg(img: string) {
      this.image = img;
  }
  
  closeGallery() {
      this.service.closeGallery();
  }

}
