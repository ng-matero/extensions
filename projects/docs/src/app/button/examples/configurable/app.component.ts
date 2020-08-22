import { Component } from '@angular/core';

@Component({
  selector: 'button-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  color = 'primary';
  disabled = false;
  loading = true;
}
