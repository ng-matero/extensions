import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'dev-button-demo',
  templateUrl: 'button-demo.component.html',
  styleUrls: ['button-demo.component.scss'],
})
export class ButtonDemoComponent {
  color: ThemePalette = 'primary';
  loading = true;
  disabled = false;
}
