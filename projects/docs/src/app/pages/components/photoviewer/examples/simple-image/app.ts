import { Component } from '@angular/core';
import { MtxPhotoviewerModule } from '@ng-matero/extensions/photoviewer';

@Component({
  selector: 'photoviewer-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxPhotoviewerModule],
})
export class App {}
