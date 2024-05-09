import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatError, MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  ColorFormat,
  MtxColorpicker,
  MtxColorpickerInput,
  MtxColorpickerToggle,
  MtxColorpickerToggleIcon,
} from '@ng-matero/extensions/colorpicker';
import { ColorSketchModule } from 'ngx-color/sketch';

@Component({
  selector: 'dev-colorpicker-demo',
  templateUrl: './colorpicker-demo.component.html',
  styleUrl: './colorpicker-demo.component.scss',
  standalone: true,
  imports: [
    MatRadioGroup,
    ReactiveFormsModule,
    FormsModule,
    MatRadioButton,
    MatFormField,
    MatLabel,
    MatInput,
    MtxColorpickerInput,
    MtxColorpickerToggle,
    MatSuffix,
    MtxColorpicker,
    MatHint,
    MatError,
    MatSlideToggle,
    MatIcon,
    MtxColorpickerToggleIcon,
    ColorSketchModule,
  ],
})
export class ColorPickerDemoComponent {
  themeColor: ThemePalette = 'primary';

  color = '#3f51b5';
  disabled = false;

  color2 = new UntypedFormControl({ value: '#3f51b5', disabled: true });

  color3 = new UntypedFormControl({ value: '#3f51b5', disabled: false });

  format: ColorFormat = 'hex';

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
