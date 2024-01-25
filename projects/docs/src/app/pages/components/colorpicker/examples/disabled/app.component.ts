import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
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
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    MtxColorpicker,
    MtxColorpickerInput,
    MtxColorpickerToggle,
  ],
})
export class AppComponent {}
