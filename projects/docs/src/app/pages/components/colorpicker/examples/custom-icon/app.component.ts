import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MtxColorpickerModule } from '@dcnx/mat-extensions/colorpicker';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MtxColorpickerModule],
})
export class AppComponent {}
