import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'doc-viewer',
  template: `<div class="docs-markdown" [innerHTML]="textContent"></div>`,
  styleUrls: ['./doc-viewer.scss'],
})
export class DocViewer implements OnDestroy {
  /** The document text. It should not be HTML encoded. */
  @Input() textContent = '';

  ngOnDestroy() {}
}
