import { Component } from '@angular/core';

@Component({
  selector: 'datetimepicker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedDate: Date | null = null;
  selectedTime: Date | null = null;
}
