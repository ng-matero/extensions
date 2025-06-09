import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';

@Component({
  selector: 'tooltip-context-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MtxTooltipModule,
  ],
})
export class App {
  data = 'Angular';
}
