import { Component } from '@angular/core';
import { MtxAlertType } from '@ng-matero/extensions';

@Component({
  selector: 'dev-alert-demo',
  templateUrl: 'alert-demo.component.html',
  styleUrls: ['alert-demo.component.scss'],
})
export class AlertDemoComponent {
  dismissible = false;
  elevation = 0;
  type: MtxAlertType = 'default';

  onClosed(e: any) {
    console.log(e);
  }
}
