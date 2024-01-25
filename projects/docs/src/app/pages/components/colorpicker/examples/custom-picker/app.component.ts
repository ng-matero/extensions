import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TinyColor } from '@ctrl/tinycolor';
import {
  MtxColorpicker,
  MtxColorpickerInput,
  MtxColorpickerToggle,
} from '@ng-matero/extensions/colorpicker';
import { ColorEvent } from 'ngx-color';
import { ColorSketchModule } from 'ngx-color/sketch';

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
    ColorSketchModule,
  ],
})
export class AppComponent {
  getHex8(e: ColorEvent): string {
    const alpha = e.color.rgb.a;
    return alpha === 1 ? e.color.hex : new TinyColor(e.color.rgb).toHex8String();
  }
}
