import { Component } from '@angular/core';
import { MtxProgressModule } from '@ng-matero/extensions/progress';

@Component({
  selector: 'dev-progress-demo',
  templateUrl: './progress-demo.component.html',
  styleUrl: './progress-demo.component.scss',
  imports: [MtxProgressModule],
})
export class ProgressDemoComponent {}
