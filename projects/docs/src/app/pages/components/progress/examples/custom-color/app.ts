import { Component } from '@angular/core';
import { MtxProgressModule } from '@ng-matero/extensions/progress';

@Component({
  selector: 'progress-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxProgressModule],
})
export class App {}
