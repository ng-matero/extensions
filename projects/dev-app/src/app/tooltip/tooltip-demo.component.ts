import { Component, ViewEncapsulation } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MtxTooltip } from '@ng-matero/extensions/tooltip';

@Component({
  selector: 'dev-tooltip-demo',
  templateUrl: 'tooltip-demo.component.html',
  styleUrls: ['tooltip-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatButton, MatTooltip, MtxTooltip],
})
export class TooltipDemoComponent {
  i = 0;

  update() {
    this.i++;
  }
}
