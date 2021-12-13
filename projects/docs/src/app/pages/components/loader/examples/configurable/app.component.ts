import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MtxLoaderType } from '@ng-matero/extensions/loader';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading = true;
  hasBackdrop = true;
  type: MtxLoaderType = 'spinner';
  color: ThemePalette = 'primary';
}
