import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from '../gallery/gallery.service';

@Component({
  selector: 'luc-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.css']
})
export class GalleryPreviewComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  images: string[];

  constructor(private service: Gallery) {}

  ngOnInit() {}

  openGallery(image: string) {
    this.service.openGallery(this.title, image, this.images);
  }
}
