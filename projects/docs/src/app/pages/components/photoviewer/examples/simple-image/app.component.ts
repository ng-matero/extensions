import { Component } from '@angular/core';
import { MtxPhotoviewerModule } from '@dcnx/mat-extensions/photoviewer';

@Component({
  selector: 'photoviewer-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxPhotoviewerModule],
})
export class AppComponent {}
