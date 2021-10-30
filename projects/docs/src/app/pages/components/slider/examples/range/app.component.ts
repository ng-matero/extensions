import { Component } from '@angular/core';

@Component({
  selector: 'slider-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value: number[] = [10, 90];
}
