import { Component } from '@angular/core';
import { MtxProgress } from '@ng-matero/extensions/progress';

@Component({
  selector: 'progress-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MtxProgress],
})
export class AppComponent {}
