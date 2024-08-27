import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { DrawerPosition, MtxDrawer, MtxDrawerRef } from '@dcnx/mat-extensions/drawer';

@Component({
  selector: 'drawer-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
export class AppComponent {
  position: DrawerPosition = 'right';
  width = '300px';
  height = '300px';
  hasBackdrop = true;
  disableClose = false;
  closeOnNavigation = true;

  constructor(private drawer: MtxDrawer) {}

  open() {
    const drawerRef = this.drawer.open(DrawerConfigurableOverviewComponent, {
      position: this.position,
      width: this.width,
      height: this.height,
      hasBackdrop: this.hasBackdrop,
      disableClose: this.disableClose,
      closeOnNavigation: this.closeOnNavigation,
      data: {},
    });

    drawerRef.afterDismissed().subscribe(result => {
      console.log('The drawer was dismissed');
    });
  }
}

@Component({
  selector: 'drawer-overview',
  template: `
    <h1 class="heading">
      <span>Title</span>
      <span class="flex-spacer"></span>
      <button mat-icon-button (click)="onClose()">
        <mat-icon>close</mat-icon>
      </button>
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  `,
  styles: [
    `
      .heading {
        display: flex;
        align-items: center;
      }

      .flex-spacer {
        flex-grow: 1;
      }
    `,
  ],
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
})
export class DrawerConfigurableOverviewComponent {
  constructor(public drawerRef: MtxDrawerRef<DrawerConfigurableOverviewComponent>) {}

  onClose(): void {
    this.drawerRef.dismiss();
  }
}
