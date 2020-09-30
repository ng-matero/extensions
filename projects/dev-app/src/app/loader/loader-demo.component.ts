import { Component } from '@angular/core';

@Component({
  selector: 'dev-loader-demo',
  templateUrl: 'loader-demo.component.html',
  styleUrls: ['loader-demo.component.scss'],
})
export class LoaderDemoComponent {
  loading = true;
  type = 'spinner';
  color = 'primary';
  hasBackdrop = true;
  strokeWidth = 4;
  diameter = 48;
}
