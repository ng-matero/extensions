import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'mtx-popover-target, [mtxPopoverTarget]',
  exportAs: 'mtxPopoverTarget',
})
export class MtxPopoverTarget {
  constructor(public elementRef: ElementRef) {}
}
