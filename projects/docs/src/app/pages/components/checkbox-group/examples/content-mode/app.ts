import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MtxCheckboxGroupModule } from '@ng-matero/extensions/checkbox-group';

@Component({
  selector: 'checkbox-group-content-mode-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxCheckboxGroupModule, MatCheckboxModule, FormsModule, JsonPipe],
})
export class App {
  selectedColors = ['red', 'green'];
}
