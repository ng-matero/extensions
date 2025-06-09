import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MtxLoaderModule, MtxLoaderType } from '@ng-matero/extensions/loader';

@Component({
  selector: 'loader-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatRadioModule, FormsModule, MatCheckboxModule, MtxLoaderModule],
})
export class App {
  loading = true;
  hasBackdrop = true;
  type: MtxLoaderType = 'spinner';
  color: ThemePalette = 'primary';
}
