import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MtxPhotoviewerModule } from '@dcnx/mat-extensions/photoviewer';

@Component({
  selector: 'dev-photoviewer-demo',
  templateUrl: 'photoviewer-demo.component.html',
  styleUrl: 'photoviewer-demo.component.scss',
  standalone: true,
  imports: [MatButtonModule, MtxPhotoviewerModule],
})
export class PhotoviewerDemoComponent {
  images1 = [
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

  images2 = [
    {
      title: 'Slipping Away by Jerry Fryer',
      src: 'https://farm1.staticflickr.com/313/31812080833_297acfbbd9_z.jpg',
      thumbnail: 'https://farm1.staticflickr.com/313/31812080833_297acfbbd9_s.jpg',
    },
    {
      title: 'Mi Fuego by albert dros',
      src: 'https://farm4.staticflickr.com/3804/33589584740_b0fbdcd4aa_z.jpg',
      thumbnail: 'https://farm4.staticflickr.com/3804/33589584740_b0fbdcd4aa_s.jpg',
    },
    {
      title: 'Winter Fairytale by Achim Thomae',
      src: 'https://farm1.staticflickr.com/470/31340603494_fb7228020d_z.jpg',
      thumbnail: 'https://farm1.staticflickr.com/470/31340603494_fb7228020d_s.jpg',
    },
  ];

  showEmbed = false;
}
