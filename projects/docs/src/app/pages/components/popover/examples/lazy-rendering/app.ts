import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';

@Component({
  selector: 'popover-lazy-rendering-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [MtxPopoverModule, MatButtonModule],
})
export class App {}
