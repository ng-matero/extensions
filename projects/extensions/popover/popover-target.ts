import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'mtx-popover-target, [mtxPopoverTarget]',
  exportAs: 'mtxPopoverTarget',
  standalone: true,
})
export class MtxPopoverTarget {
  elementRef = inject(ElementRef);
}
