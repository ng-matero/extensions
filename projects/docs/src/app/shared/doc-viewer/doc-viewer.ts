import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'doc-viewer',
  template: `<div class="docs-markdown" [innerHTML]="textContent"></div>`,
  styleUrls: ['./doc-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class DocViewer implements OnDestroy {
  /** The document text. It should not be HTML encoded. */
  @Input() textContent = '';

  ngOnDestroy() {}
}
