import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MtxPopoverTarget, MtxPopoverTrigger } from '@ng-matero/extensions/popover';
import { MtxPopover } from '@ng-matero/extensions/popover/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    MatButton,
    CdkDrag,
    MtxPopoverTrigger,
    MtxPopover,
    MtxPopoverTarget,
  ],
})
export class AppComponent {
  target: any;
}
