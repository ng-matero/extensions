import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorFormat, MtxColorpickerModule } from '@dcnx/mat-extensions/colorpicker';
import { ColorSketchModule } from 'ngx-color/sketch';

@Component({
  selector: 'dev-colorpicker-demo',
  templateUrl: './colorpicker-demo.component.html',
  styleUrl: './colorpicker-demo.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MtxColorpickerModule,
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
