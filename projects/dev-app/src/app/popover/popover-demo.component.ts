import { Component } from '@angular/core';

@Component({
  selector: 'dev-popover-demo',
  templateUrl: 'popover-demo.component.html',
  styleUrls: ['popover-demo.component.scss'],
})
export class PopoverDemoComponent {
  log() {
    console.log('popover event!');
  }
}
