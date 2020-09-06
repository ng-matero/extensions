import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'dev-color-picker-demo',
  templateUrl: './color-picker-demo.component.html',
  styleUrls: ['./color-picker-demo.component.scss'],
})
export class ColorPickerDemoComponent {
  color = '#3f51b5';
  disabled = false;

  color2 = new FormControl({ value: '#3f51b5', disabled: true });

  onColorChange(e: any) {
    console.log(e);
  }

  toggleDisabled(e: MatSlideToggleChange) {
    if (e.checked) {
      this.color2.disable();
    } else {
      this.color2.enable();
    }
  }
}
