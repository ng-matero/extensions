import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MtxSplit, MtxSplitPane } from '@ng-matero/extensions/split';

@Component({
  selector: 'dev-split',
  templateUrl: './split-demo.component.html',
  styleUrls: ['./split-demo.component.scss'],
  standalone: true,
  imports: [
    MatRadioGroup,
    ReactiveFormsModule,
    FormsModule,
    MatRadioButton,
    MtxSplit,
    MtxSplitPane,
  ],
})
export class SplitDemoComponent {
  themeColor: ThemePalette = 'primary';
}
