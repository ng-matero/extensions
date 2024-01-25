import { Component } from '@angular/core';
import { MtxSplit, MtxSplitPane } from '@ng-matero/extensions/split';

@Component({
  selector: 'split-pane-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MtxSplit, MtxSplitPane],
})
export class AppComponent {}
