import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';

export type MtxHighlightBoxType = 'default' | 'info' | 'success' | 'warning' | 'danger';
export type MtxHighlightBoxAppearance = 'outlined' | 'raised' | 'flat';
@Component({
  selector: 'mtx-highlight-box',
  exportAs: 'mtxHighlightBox',
  host: {
    class: 'mtx-highlight-box',
    role: 'alert',
  },
  templateUrl: './highlight-box.html',
  styleUrl: './highlight-box.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatTooltip, NgClass],
})
export class MtxHighlightBox {
  label = input<string>();
  type = input<MtxHighlightBoxType>('success');
  appearance = input<MtxHighlightBoxAppearance>('raised');
  rounded = input<boolean>(false);
  showLabelAsTooltip = input<boolean>(true);
}
