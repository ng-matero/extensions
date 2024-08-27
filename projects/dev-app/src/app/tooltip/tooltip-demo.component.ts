import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MtxTooltipModule } from '@dcnx/mat-extensions/tooltip';

@Component({
  selector: 'dev-tooltip-demo',
  templateUrl: 'tooltip-demo.component.html',
  styleUrl: 'tooltip-demo.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MtxTooltipModule],
})
export class TooltipDemoComponent {
  i = 0;

  update() {
    this.i++;
  }
}
