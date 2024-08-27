import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MtxSplitModule } from '@dcnx/mat-extensions/split';

@Component({
  selector: 'dev-split',
  templateUrl: './split-demo.component.html',
  styleUrl: './split-demo.component.scss',
  standalone: true,
  imports: [MatRadioModule, ReactiveFormsModule, FormsModule, MtxSplitModule],
})
export class SplitDemoComponent {
  themeColor: ThemePalette = 'primary';
}
