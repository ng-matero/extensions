import { Component } from '@angular/core';
import { MtxProgress } from '@ng-matero/extensions/progress';

@Component({
  selector: 'dev-progress-demo',
  templateUrl: './progress-demo.component.html',
  styleUrl: './progress-demo.component.scss',
  standalone: true,
  imports: [MtxProgress],
})
export class ProgressDemoComponent {}
