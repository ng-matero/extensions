import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss'],
})
export class AlertComponent {
  onClosed(e: any) {
    console.log(e);
  }
}
