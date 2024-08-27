import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MtxPopoverModule } from '@dcnx/mat-extensions/popover';

@Component({
  selector: 'dev-popover-demo',
  templateUrl: 'popover-demo.component.html',
  styleUrl: 'popover-demo.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CdkDrag,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MtxPopoverModule,
  ],
})
export class PopoverDemoComponent {
  hideArrow = false;

  log() {
    console.log('popover event!');
  }
}
