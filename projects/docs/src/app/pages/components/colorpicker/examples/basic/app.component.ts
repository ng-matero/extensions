import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import {
  ColorFormat,
  MtxColorpicker,
  MtxColorpickerInput,
  MtxColorpickerToggle,
} from '@ng-matero/extensions/colorpicker';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    MatHint,
    MatError,
    MtxColorpicker,
    MtxColorpickerInput,
    MtxColorpickerToggle,
  ],
})
export class AppComponent {
  color = '#3f51b5';
  format: ColorFormat = 'hex';
}
