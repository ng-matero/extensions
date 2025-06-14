import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';

@Component({
  selector: 'colorpicker-custom-icon-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MtxColorpickerModule],
})
export class App {}
