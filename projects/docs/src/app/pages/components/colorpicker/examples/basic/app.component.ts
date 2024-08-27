import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ColorFormat, MtxColorpickerModule } from '@dcnx/mat-extensions/colorpicker';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MatFormFieldModule, MatInputModule, MtxColorpickerModule],
})
export class AppComponent {
  color = '#3f51b5';
  format: ColorFormat = 'hex';
}
