import { Component } from '@angular/core';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color = '#3f51b5';

  changeColor(e: any) {
    console.log(e);
  }
}
