import { Component } from '@angular/core';

@Component({
  selector: 'dev-button-demo',
  templateUrl: 'button-demo.component.html',
  styleUrls: ['button-demo.component.scss'],
})
export class ButtonDemoComponent {
  color = 'primary';
  loading = true;
}
