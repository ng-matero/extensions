import { Directive, HostListener, Input } from '@angular/core';
import PhotoViewer from 'photoviewer';
import { MtxGridUtils } from './grid-utils';

@Directive({
  selector: '[mtx-grid-image-preview]',
})
export class MtxGridImagePreview {
  @Input() images: PhotoViewer.Img[] = [];
  @Input() options?: PhotoViewer.Options;

  constructor(private _utils: MtxGridUtils) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.images.length > 0) {
      this.initPhotoViewer(this.images);
    } else {
      const el = event.target as HTMLImageElement;
      if (el.nodeName === 'IMG') {
        const imgs = this._utils
          .str2arr(el.src)
          .map((url, index) => ({ title: index + 1 + '', src: url }));
        this.initPhotoViewer(imgs);
      }
    }
  }

  initPhotoViewer(imgs: PhotoViewer.Img[] = []) {
    const footerToolbar =
      imgs.length > 1
        ? ['zoomIn', 'zoomOut', 'prev', 'next', 'rotateRight', 'rotateLeft', 'actualSize']
        : ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'];

    const options: PhotoViewer.Options = {
      title: imgs.length > 1,
      footerToolbar,
    };

    new PhotoViewer(imgs, this.options || options);
  }
}
