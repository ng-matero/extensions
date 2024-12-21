import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'doc-viewer',
  template: `
    <div class="docs-markdown" [innerHTML]="textContent"></div>
  `,
  styleUrl: './doc-viewer.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DocViewer implements OnDestroy {
  /** The document text. It should not be HTML encoded. */
  @Input() textContent = '';

  ngOnDestroy() {}
}
