import { Component } from '@angular/core';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading = true;
  hasBackdrop = true;
  type = 'spinner';
  color = 'primary';
}
