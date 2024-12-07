import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MatFormFieldModule, MatInputModule, MtxColorpickerModule],
})
export class AppComponent {}
