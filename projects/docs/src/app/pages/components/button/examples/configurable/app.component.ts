import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatButtonLoading } from '@ng-matero/extensions/button';

@Component({
  selector: 'button-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    MatButton,
    MatButtonLoading,
    MatIconButton,
    MatIcon,
    MatFabButton,
    MatMiniFabButton,
  ],
})
export class AppComponent {
  color: ThemePalette = 'primary';
  loading = true;
}
