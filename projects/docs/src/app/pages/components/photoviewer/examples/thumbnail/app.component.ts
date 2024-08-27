import { Component } from '@angular/core';
import { MtxPhotoviewerModule } from '@dcnx/mat-extensions/photoviewer';

@Component({
  selector: 'photoviewer-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxPhotoviewerModule],
})
export class AppComponent {
  images = [
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
}
