import { Component } from '@angular/core';

@Component({
  selector: 'text-3d-example',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  text = '3D Text';
  depth = 20;
  rotateX = 60;
  rotateY = 0;
  rotateZ = 0;
}
