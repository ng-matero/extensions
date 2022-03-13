import { Component, Inject } from '@angular/core';
import {
  DrawerPosition,
  MtxDrawer,
  MtxDrawerRef,
  MTX_DRAWER_DATA,
} from '@ng-matero/extensions/drawer';

@Component({
  selector: 'dev-drawer-demo',
  templateUrl: './drawer-demo.component.html',
  styleUrls: ['./drawer-demo.component.scss'],
})
export class DrawerDemoComponent {
  position: DrawerPosition = 'right';
  width = 300;
  height = 300;
  hasBackdrop = true;
  disableClose = false;
  closeOnNavigation = true;

  animal?: string;
  name?: string;

  constructor(private drawer: MtxDrawer) {}

  open() {
    const drawerRef = this.drawer.open(DrawerOverviewComponent, {
      position: this.position,
      width: this.width + 'px',
      height: this.height + 'px',
      hasBackdrop: this.hasBackdrop,
      disableClose: this.disableClose,
      closeOnNavigation: this.closeOnNavigation,
      data: { name: this.name, animal: this.animal },
    });

    drawerRef.afterDismissed().subscribe(result => {
      console.log('The drawer was dismissed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dev-drawer-overview',
  template: `
    <h1>Hi, {{ data.name }}</h1>
    <div>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.animal" />
      </mat-form-field>
    </div>
    <div>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button (click)="onOkClick()" cdkFocusInitial>Ok</button>
    </div>
  `,
})
export class DrawerOverviewComponent {
  constructor(
    public drawerRef: MtxDrawerRef<DrawerOverviewComponent>,
    @Inject(MTX_DRAWER_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.drawerRef.dismiss();
  }

  onOkClick() {
    this.drawerRef.dismiss(this.data.animal);
  }
}
