import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MtxLoaderModule, MtxLoaderType } from '@dcnx/mat-extensions/loader';

@Component({
  selector: 'loader-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatCheckboxModule, MtxLoaderModule],
})
export class AppComponent {
  loading = true;
  hasBackdrop = true;
  type: MtxLoaderType = 'spinner';
  color: ThemePalette = 'primary';
}
