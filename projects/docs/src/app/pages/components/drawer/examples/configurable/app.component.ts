import { Component } from '@angular/core';
import { DrawerPosition, MtxDrawer, MtxDrawerRef } from '@ng-matero/extensions/drawer';

@Component({
  selector: 'drawer-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
    <h1 class="mat-h1" fxLayoutAlign=" center">
      <span>Title</span>
      <span fxFlex></span>
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
})
export class DrawerConfigurableOverviewComponent {
  constructor(public drawerRef: MtxDrawerRef<DrawerConfigurableOverviewComponent>) {}

  onClose(): void {
    this.drawerRef.dismiss();
  }
}
