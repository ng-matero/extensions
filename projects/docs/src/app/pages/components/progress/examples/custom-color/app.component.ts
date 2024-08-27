import { Component } from '@angular/core';
import { MtxProgressModule } from '@dcnx/mat-extensions/progress';

@Component({
  selector: 'progress-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxProgressModule],
})
export class AppComponent {}
