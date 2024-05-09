import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconAnchor,
  MatIconButton,
  MatMiniFabAnchor,
  MatMiniFabButton,
} from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatButtonLoading } from '@ng-matero/extensions/button/button-loading';

@Component({
  selector: 'dev-button-demo',
  templateUrl: 'button-demo.component.html',
  styleUrl: 'button-demo.component.scss',
  standalone: true,
  imports: [
    MatCheckbox,
    ReactiveFormsModule,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatButton,
    MatButtonLoading,
    MatIconButton,
    MatIcon,
    MatFabButton,
    MatMiniFabButton,
    MatAnchor,
    MatIconAnchor,
    MatFabAnchor,
    MatMiniFabAnchor,
  ],
})
export class ButtonDemoComponent {
  color: ThemePalette = 'primary';
  loading = true;
  disabled = false;
}
