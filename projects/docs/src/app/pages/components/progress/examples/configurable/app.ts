import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';
import { MtxProgressModule, MtxProgressType } from '@ng-matero/extensions/progress';

@Component({
  selector: 'progress-configurable-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    FormsModule,
    MatRadioModule,
    MatSliderModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MtxColorpickerModule,
    MtxProgressModule,
  ],
})
export class App {
  type: MtxProgressType = 'info';
  value = 50;
  striped = false;
  animate = false;
  height = 16;
  foreground = '';
  background = '';
}
