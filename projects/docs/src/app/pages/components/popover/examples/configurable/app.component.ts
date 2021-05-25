import { Component } from '@angular/core';
import {
  MtxPopoverPositionX,
  MtxPopoverPositionY,
} from '@ng-matero/extensions/popover/popover-types';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  xPosition: MtxPopoverPositionX = 'after';
  yPosition: MtxPopoverPositionY = 'below';
  enterDelay = 200;
  leaveDelay = 200;
  xOffset = 0;
  yOffset = 0;
  overlapTrigger = false;
  closeOnPanelClick = false;
}
