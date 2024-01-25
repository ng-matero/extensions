import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import {
  MtxColorpicker,
  MtxColorpickerInput,
  MtxColorpickerToggle,
  MtxColorpickerToggleIcon,
} from '@ng-matero/extensions/colorpicker';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    MatIcon,
    MtxColorpicker,
    MtxColorpickerInput,
    MtxColorpickerToggle,
    MtxColorpickerToggleIcon,
  ],
})
export class AppComponent {}
