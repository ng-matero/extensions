import { Component } from '@angular/core';
import { MtxAlertType } from '@ng-matero/extensions/alert';

@Component({
  selector: 'alert-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type: MtxAlertType = 'info';
  dismissible = false;
  elevation = 3;

  onClosed(e: any) {
    alert('closed event!');
    console.log(e);
  }
}
