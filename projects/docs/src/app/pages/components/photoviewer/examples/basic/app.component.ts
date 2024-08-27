import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MtxPhotoviewerModule } from '@dcnx/mat-extensions/photoviewer';

@Component({
  selector: 'photoviewer-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MatButtonModule, MtxPhotoviewerModule],
})
export class AppComponent {
  images = [
    {
      src: 'https://c1.staticflickr.com/3/2136/32571842110_faadf0b1a7_k.jpg',
      title:
        'Glendalough Upper Lake by <a href="https://www.flickr.com/photos/desomnis/">Angelika Hörschläger</a>',
    },
    {
      src: 'https://c1.staticflickr.com/5/4364/35774111373_187963664b_h.jpg',
      title:
        'A foggy summer day by <a href="https://www.flickr.com/photos/desomnis/">Angelika Hörschläger</a>',
    },
    {
      src: 'https://c1.staticflickr.com/8/7737/28617607314_170a8e6752_k.jpg',
      title:
        'My Silver Lining (explore) by <a href="https://www.flickr.com/photos/desomnis/">Angelika Hörschläger</a>',
    },
  ];
}
