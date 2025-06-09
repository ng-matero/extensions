import { Component } from '@angular/core';
import { MtxProgressModule } from '@ng-matero/extensions/progress';

@Component({
  selector: 'dev-progress-demo',
  templateUrl: './progress-demo.html',
  styleUrl: './progress-demo.scss',
  imports: [MtxProgressModule],
})
export class ProgressDemo {}
