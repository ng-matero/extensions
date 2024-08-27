import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {
  MtxPopoverModule,
  MtxPopoverPositionEnd,
  MtxPopoverPositionStart,
  MtxPopoverTriggerEvent,
} from '@dcnx/mat-extensions/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonModule,
    MtxPopoverModule,
    CdkDrag,
  ],
})
export class AppComponent implements OnInit {
  triggerEvent: MtxPopoverTriggerEvent = 'hover';
  enterDelay = 100;
  leaveDelay = 100;
  xOffset = 0;
  yOffset = 0;
  closeOnPanelClick = false;
  hasBackdrop = true;
  hideArrow = false;

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
