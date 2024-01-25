import { Component } from '@angular/core';
import { MtxPhotoviewer } from '@ng-matero/extensions/photoviewer';

@Component({
  selector: 'photoviewer-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MtxPhotoviewer],
})
export class AppComponent {}
