import { Component, OnInit } from '@angular/core';
import {
  MtxPopoverPositionEnd,
  MtxPopoverPositionStart,
  MtxPopoverTriggerEvent,
} from '@ng-matero/extensions/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  triggerEvent: MtxPopoverTriggerEvent = 'hover';
  enterDelay = 100;
  leaveDelay = 100;
  xOffset = 0;
  yOffset = 0;
  closeOnPanelClick = false;
  hasBackdrop = true;
  elevation = 8;

  positionXOptions = ['before', 'after'];
  positionYOptions = ['above', 'below'];

  positionStartOptions = [...this.positionYOptions, ...this.positionXOptions];
  positionEndOptions: any[] = [];

  positionStart: MtxPopoverPositionStart = 'below';
  positionEnd: MtxPopoverPositionEnd = 'after';

  onPositionStartChange(value?: string) {
    if (this.positionXOptions.includes(this.positionStart)) {
      this.positionEnd = 'below';
      this.positionEndOptions = [...this.positionYOptions, 'center'];
    }

    if (this.positionYOptions.includes(this.positionStart)) {
      this.positionEnd = 'after';
      this.positionEndOptions = [...this.positionXOptions, 'center'];
    }
  }

  ngOnInit() {
    this.onPositionStartChange();
  }
}
