import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';

@Component({
  selector: 'datetimepicker-inline-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MatCardModule, MtxDatetimepickerModule],
  providers: [provideNativeDatetimeAdapter()],
})
export class App {
  selectedDate: Date | null = null;
  selectedTime: Date | null = null;
}
