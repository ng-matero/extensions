import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MtxPopover, MtxPopoverContent, MtxPopoverTrigger } from '@ng-matero/extensions/popover';

@Component({
  selector: 'popover-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MtxPopover, MtxPopoverContent, MatButton, MtxPopoverTrigger],
})
export class AppComponent {}
