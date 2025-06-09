import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MtxSplitModule } from '@ng-matero/extensions/split';

@Component({
  selector: 'dev-split',
  templateUrl: './split-demo.html',
  styleUrl: './split-demo.scss',
  imports: [MatRadioModule, ReactiveFormsModule, FormsModule, MtxSplitModule],
})
export class SplitDemo {
  themeColor: ThemePalette = 'primary';
}
