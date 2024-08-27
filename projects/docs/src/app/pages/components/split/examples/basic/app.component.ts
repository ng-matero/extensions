import { Component } from '@angular/core';
import { MtxSplitModule } from '@dcnx/mat-extensions/split';

@Component({
  selector: 'split-pane-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxSplitModule],
})
export class AppComponent {}
