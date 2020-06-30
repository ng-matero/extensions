import { Component } from '@angular/core';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color = '#3f51b5';

  changeColor(e: any) {
    console.log(e);
  }
}
