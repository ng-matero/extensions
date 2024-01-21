import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'mtx-popover-target, [mtxPopoverTarget]',
  exportAs: 'mtxPopoverTarget',
  standalone: true,
})
export class MtxPopoverTarget {
  constructor(public elementRef: ElementRef) {}
}
