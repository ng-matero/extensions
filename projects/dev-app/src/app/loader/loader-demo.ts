import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxLoaderModule, MtxLoaderType } from '@ng-matero/extensions/loader';

@Component({
  selector: 'dev-loader-demo',
  templateUrl: 'loader-demo.html',
  styleUrl: 'loader-demo.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MtxLoaderModule,
  ],
})
export class LoaderDemo {
  loading = true;
  type: MtxLoaderType = 'spinner';
  color: ThemePalette = 'primary';
  hasBackdrop = true;
  strokeWidth = 4;
  diameter = 48;
}
