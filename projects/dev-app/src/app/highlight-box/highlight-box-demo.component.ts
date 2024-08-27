import { Component } from '@angular/core';
import { MtxHighlightBox } from '@dcnx/mat-extensions/highlight-box';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'dev-highlight-box-demo',
  templateUrl: 'highlight-box-demo.component.html',
  styleUrl: 'highlight-box-demo.component.scss',
  standalone: true,
  imports: [MtxHighlightBox, MatIcon, MatTooltip],
})
export class HighlightBoxDemoComponent {
  // dismissible = false;
  // elevation = 0;
  // type: MtxAlertType = 'default';
  //
  // onClosed(e: any) {
  //   alert('closed event!');
  //   console.log(e);
  // }
}
