import { Component, OnInit } from '@angular/core';
import {
  MtxPopoverPosition,
  MtxPopoverPositionEnd,
  MtxPopoverPositionStart,
} from '@ng-matero/extensions/popover';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  enterDelay = 200;
  leaveDelay = 200;
  xOffset = 0;
  yOffset = 0;
  closeOnPanelClick = false;

  positionXOptions = ['before', 'after'];
  positionYOptions = ['above', 'below'];

  positionStartOptions = [...this.positionYOptions, ...this.positionXOptions];
  positionEndOptions: any[] = [];

  positionStart: MtxPopoverPositionStart = 'after';
  positionEnd: MtxPopoverPositionEnd = 'below';

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
