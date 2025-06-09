import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TinyColor } from '@ctrl/tinycolor';
import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';
import { ColorEvent } from 'ngx-color';
import { ColorSketchModule } from 'ngx-color/sketch';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatFormFieldModule, MatInputModule, MtxColorpickerModule, ColorSketchModule],
})
export class App {
  getHex8(e: ColorEvent): string {
    const alpha = e.color.rgb.a;
    return alpha === 1 ? e.color.hex : new TinyColor(e.color.rgb).toHex8String();
  }
}
