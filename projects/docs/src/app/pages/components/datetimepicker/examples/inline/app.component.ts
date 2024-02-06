import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { provideNativeDatetimeAdapter } from '@ng-matero/extensions/core';
import { MtxCalendar } from '@ng-matero/extensions/datetimepicker';

@Component({
  selector: 'datetimepicker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatCard, MtxCalendar],
  providers: [provideNativeDatetimeAdapter()],
})
export class AppComponent {
  selectedDate: Date | null = null;
  selectedTime: Date | null = null;
}
