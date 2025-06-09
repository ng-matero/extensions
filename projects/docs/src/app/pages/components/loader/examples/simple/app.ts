import { Component } from '@angular/core';
import { MtxLoaderModule } from '@ng-matero/extensions/loader';

@Component({
  selector: 'loader-simple-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxLoaderModule],
})
export class App {}
