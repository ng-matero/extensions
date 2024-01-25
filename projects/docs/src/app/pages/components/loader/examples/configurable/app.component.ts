import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MtxLoader, MtxLoaderType } from '@ng-matero/extensions/loader';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatRadioGroup, FormsModule, MatRadioButton, MatCheckbox, MtxLoader],
})
export class AppComponent {
  loading = true;
  hasBackdrop = true;
  type: MtxLoaderType = 'spinner';
  color: ThemePalette = 'primary';
}
