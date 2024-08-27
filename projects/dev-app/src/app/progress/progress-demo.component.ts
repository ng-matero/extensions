import { Component } from '@angular/core';
import { MtxProgressModule } from '@dcnx/mat-extensions/progress';

@Component({
  selector: 'dev-progress-demo',
  templateUrl: './progress-demo.component.html',
  styleUrl: './progress-demo.component.scss',
  standalone: true,
  imports: [MtxProgressModule],
})
export class ProgressDemoComponent {}
