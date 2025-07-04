import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';

@Component({
  selector: 'colorpicker-disabled-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatFormFieldModule, MatInputModule, MtxColorpickerModule],
})
export class App {}
