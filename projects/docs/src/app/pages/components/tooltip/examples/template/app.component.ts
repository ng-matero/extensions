import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MtxTooltipModule, TooltipPosition } from '@ng-matero/extensions/tooltip';

@Component({
  selector: 'tooltip-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MtxTooltipModule],
})
export class AppComponent {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = this.positionOptions[0];
}
