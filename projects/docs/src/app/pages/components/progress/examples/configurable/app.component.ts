import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxColorpickerModule } from '@dcnx/mat-extensions/colorpicker';
import { MtxProgressModule, MtxProgressType } from '@dcnx/mat-extensions/progress';

@Component({
  selector: 'progress-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
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
export class AppComponent {
  type: MtxProgressType = 'info';
  value = 50;
  striped = false;
  animate = false;
  height = 16;
  foreground = '';
  background = '';
}
