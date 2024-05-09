import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MtxLoader, MtxLoaderType } from '@ng-matero/extensions/loader';

@Component({
  selector: 'dev-loader-demo',
  templateUrl: 'loader-demo.component.html',
  styleUrl: 'loader-demo.component.scss',
  standalone: true,
  imports: [
    MatCheckbox,
    ReactiveFormsModule,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatSlider,
    MatSliderThumb,
    MtxLoader,
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
