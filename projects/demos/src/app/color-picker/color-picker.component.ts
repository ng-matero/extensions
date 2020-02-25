import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  color = '#3f51b5';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  changeColor(e: any) {
    console.log(e);
  }
}
