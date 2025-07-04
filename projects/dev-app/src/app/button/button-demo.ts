import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MtxButtonModule } from '@ng-matero/extensions/button';

@Component({
  selector: 'dev-button-demo',
  templateUrl: 'button-demo.html',
  styleUrl: 'button-demo.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MtxButtonModule,
  ],
})
export class ButtonDemo {
  color: ThemePalette = 'primary';
  loading = true;
  disabled = false;
}
