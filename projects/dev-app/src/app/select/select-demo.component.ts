import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MtxSelectModule } from '@dcnx/mat-extensions/select';

@Component({
  selector: 'dev-app-select',
  templateUrl: './select-demo.component.html',
  styleUrl: './select-demo.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MtxSelectModule,
  ],
})
export class SelectDemoComponent {
  themeColor: ThemePalette = 'primary';

  disabled = false;
  readonly = false;
  multipleSelect = false;
  closeOnSelect = true;

  items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Lemon' },
    { id: 3, name: 'Lime' },
    { id: 4, name: 'Orange', disabled: true },
    { id: 5, name: 'Strawberry' },
  ];

  value = 5;

  selectedAccount = 'Adam';
  accounts = [
    {
      name: 'Adam',
      email: 'adam@email.com',
      age: 12,
      country: 'United States',
      child: { state: 'Active' },
    },
    {
      name: 'Homer',
      email: 'homer@email.com',
      age: 47,
      country: '',
      child: { state: 'Active' },
    },
    {
      name: 'Samantha',
      email: 'samantha@email.com',
      age: 30,
      country: 'United States',
      child: { state: 'Active' },
    },
    {
      name: 'Amalie',
      email: 'amalie@email.com',
      age: 12,
      country: 'Argentina',
      child: { state: 'Active' },
    },
    {
      name: 'Estefanía',
      email: 'estefania@email.com',
      age: 21,
      country: 'Argentina',
      child: { state: 'Active' },
    },
    {
      name: 'Adrian',
      email: 'adrian@email.com',
      age: 21,
      country: 'Ecuador',
      child: { state: 'Active' },
    },
    {
      name: 'Wladimir',
      email: 'wladimir@email.com',
      age: 30,
      country: 'Ecuador',
      child: { state: 'Inactive' },
    },
    {
      name: 'Natasha',
      email: 'natasha@email.com',
      age: 54,
      country: 'Ecuador',
      child: { state: 'Inactive' },
    },
    {
      name: 'Nicole',
      email: 'nicole@email.com',
      age: 43,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
    {
      name: 'Michael',
      email: 'michael@email.com',
      age: 15,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
    {
      name: 'Nicolás',
      email: 'nicole@email.com',
      age: 43,
      country: 'Colombia',
      child: { state: 'Inactive' },
    },
  ];

  control = new FormControl({ value: 1, disabled: true }, Validators.required);

  changeState(e: MatSlideToggleChange) {
    if (e.checked) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  log(e: any, type = '') {
    console.log(type + ':', e);
  }
}
