import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MtxColorpicker } from '@ng-matero/extensions/colorpicker/colorpicker';
import { MtxColorpickerInput } from '@ng-matero/extensions/colorpicker/colorpicker-input';
import { MtxColorpickerToggle } from '@ng-matero/extensions/colorpicker/colorpicker-toggle';
import { MtxProgress, MtxProgressType } from '@ng-matero/extensions/progress';

@Component({
  selector: 'progress-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatSlider,
    MatSliderThumb,
    MatCheckbox,
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    MtxColorpicker,
    MtxColorpickerInput,
    MtxColorpickerToggle,
    MtxProgress,
  ],
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
