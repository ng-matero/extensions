import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ColorFormat, MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, MatRadioModule, MatFormFieldModule, MatInputModule, MtxColorpickerModule],
})
export class App {
  color = '#3f51b5';
  format: ColorFormat = 'hex';
}
