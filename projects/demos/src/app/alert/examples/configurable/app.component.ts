import { Component } from '@angular/core';

@Component({
  selector: 'alert-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  type = 'info';
  dismissible = false;
  elevation = 3;

  onClosed(e: any) {
    console.log(e);
  }
}
