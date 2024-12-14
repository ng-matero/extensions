import { Component } from '@angular/core';
import { MtxPhotoviewerModule } from '@ng-matero/extensions/photoviewer';

@Component({
  selector: 'photoviewer-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MtxPhotoviewerModule],
})
export class AppComponent {}
