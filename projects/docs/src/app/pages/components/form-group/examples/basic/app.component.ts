import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'form-group-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color: ThemePalette = 'primary';
  required = false;
  disabled = false;
  showSuffix = false;
  showPrefix = false;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  selectedFood?: string;

  text?: string;

  date?: string;
}
