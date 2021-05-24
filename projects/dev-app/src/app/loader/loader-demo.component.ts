import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MtxLoaderType } from '@ng-matero/extensions/loader';

@Component({
  selector: 'dev-loader-demo',
  templateUrl: 'loader-demo.component.html',
  styleUrls: ['loader-demo.component.scss'],
})
export class LoaderDemoComponent {
  loading = true;
  type: MtxLoaderType = 'spinner';
  color: ThemePalette = 'primary';
  hasBackdrop = true;
  strokeWidth = 4;
  diameter = 48;
}
