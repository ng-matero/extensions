import { Component } from '@angular/core';
import { MtxTimepicker } from '@ng-matero/extensions/timepicker/timepicker';

@Component({
  selector: 'dev-timepicker-demo',
  templateUrl: 'timepicker-demo.component.html',
  styleUrl: 'timepicker-demo.component.scss',
  standalone: true,
  imports: [MtxTimepicker],
  providers: [],
})
export class TimepickerDemoComponent {}
