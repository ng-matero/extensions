import { Directive, HostListener, Input, OnInit } from '@angular/core';
import PhotoViewer from 'photoviewer';

@Directive({
  selector: '[mtxPhotoViewer]',
})
export class MtxPhotoviewer implements OnInit {
  @Input('mtxPhotoViewerItems')
  images: PhotoViewer.Img[] = [];

  @Input('mtxPhotoViewerOptions')
  options?: PhotoViewer.Options;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();

    if (this.images.length > 0) {
      this.initPhotoViewer(this.images);
    } else {
      const el = event.target as HTMLImageElement;
      if (el.nodeName === 'IMG') {
        const imgs = [{ title: el.title || el.alt, src: el.src }];
        this.initPhotoViewer(imgs);
      }
    }
  }

  initPhotoViewer(imgs: PhotoViewer.Img[] = []) {
    new PhotoViewer(imgs, this.options);
  }
}
