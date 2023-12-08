import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import PhotoViewer from 'photoviewer';

@Directive({
  selector: '[mtxPhotoviewer]',
  exportAs: 'mtxPhotoviewer',
})
export class MtxPhotoviewer implements OnInit, OnDestroy {
  @Input('mtxPhotoviewerItems')
  images: PhotoViewer.Img[] = [];

  @Input('mtxPhotoviewerOptions')
  options?: PhotoViewer.Options;

  @Input('mtxPhotoviewerEmbed')
  embed = false;

  photoviewerInstance?: PhotoViewer;

  constructor(private _elementRef: ElementRef<Element>) {}

  ngOnInit(): void {
    const { nativeElement } = this._elementRef;

    if (this.embed) {
      this.options = {
        appendTo: nativeElement,
        positionFixed: false,
        modalWidth: nativeElement.clientWidth,
        modalHeight: nativeElement.clientHeight,
        ...this.options,
      };
      this.initPhotoViewer();
    } else {
      if (this.images.length === 0 && nativeElement.nodeName === 'IMG') {
        const img = nativeElement as HTMLImageElement;
        this.images = [{ title: img.title || img.alt, src: img.src }];
      }
    }
  }

  ngOnDestroy(): void {
    this.photoviewerInstance?.close();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();

    if (!this.embed) {
      this.initPhotoViewer();
    }
  }

  initPhotoViewer() {
    this.photoviewerInstance = new PhotoViewer(this.images, this.options);
  }
}
