import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TooltipPosition } from '@ng-matero/extensions/tooltip';

@Component({
  selector: 'tooltip-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new UntypedFormControl(this.positionOptions[0]);
}
