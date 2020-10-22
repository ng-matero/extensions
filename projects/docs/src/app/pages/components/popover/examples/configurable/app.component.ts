import { Component } from '@angular/core';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  xPosition = 'after';
  yPosition = 'below';
  enterDelay = 200;
  leaveDelay = 200;
  panelOffsetX = 0;
  panelOffsetY = 0;
  overlapTrigger = false;
}
