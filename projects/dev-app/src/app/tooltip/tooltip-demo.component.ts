import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dev-tooltip-demo',
  templateUrl: 'tooltip-demo.component.html',
  styleUrls: ['tooltip-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TooltipDemoComponent {
  i = 0;

  update() {
    this.i++;
  }
}
