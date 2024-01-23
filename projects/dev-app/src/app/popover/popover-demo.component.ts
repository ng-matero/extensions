import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { MtxPopover, MtxPopoverTarget, MtxPopoverTrigger } from '@ng-matero/extensions/popover';

@Component({
  selector: 'dev-popover-demo',
  templateUrl: 'popover-demo.component.html',
  styleUrls: ['popover-demo.component.scss'],
  standalone: true,
  imports: [
    MatSlideToggle,
    ReactiveFormsModule,
    FormsModule,
    MatButton,
    CdkDrag,
    MtxPopoverTrigger,
    MtxPopover,
    MatCard,
    MatCardContent,
    MatToolbar,
    MtxPopoverTarget,
  ],
})
export class PopoverDemoComponent {
  hideArrow = false;

  log() {
    console.log('popover event!');
  }
}
