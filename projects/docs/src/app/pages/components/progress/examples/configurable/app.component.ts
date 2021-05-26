import { Component } from '@angular/core';
import { MtxProgressType } from '@ng-matero/extensions';

@Component({
  selector: 'progress-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type: MtxProgressType = 'info';
  value = 50;
  striped = false;
  animate = false;
  height = 16;
  foreground = '';
  background = '';
}
