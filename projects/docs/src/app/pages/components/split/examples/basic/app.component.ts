import { Component } from '@angular/core';
import { MtxSplitModule } from '@ng-matero/extensions/split';

@Component({
  selector: 'split-pane-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MtxSplitModule],
})
export class AppComponent {}
