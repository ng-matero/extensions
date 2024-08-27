import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MtxLoaderModule, MtxLoaderType } from '@dcnx/mat-extensions/loader';

@Component({
  selector: 'dev-loader-demo',
  templateUrl: 'loader-demo.component.html',
  styleUrl: 'loader-demo.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MtxLoaderModule,
  ],
})
export class LoaderDemoComponent {
  loading = true;
  type: MtxLoaderType = 'spinner';
  color: ThemePalette = 'primary';
  hasBackdrop = true;
  strokeWidth = 4;
  diameter = 48;
}
