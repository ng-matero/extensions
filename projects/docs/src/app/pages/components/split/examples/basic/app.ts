import { Component } from '@angular/core';
import { MtxSplitModule } from '@ng-matero/extensions/split';

@Component({
  selector: 'split-pane-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxSplitModule],
})
export class App {}
