import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import {
  MtxPopover,
  MtxPopoverPositionEnd,
  MtxPopoverPositionStart,
  MtxPopoverTrigger,
  MtxPopoverTriggerEvent,
} from '@ng-matero/extensions/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatSlider,
    MatSliderThumb,
    MatButton,
    CdkDrag,
    MtxPopoverTrigger,
    MtxPopover,
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
  elevation = 8;
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
