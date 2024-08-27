import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  DrawerPosition,
  MTX_DRAWER_DATA,
  MtxDrawer,
  MtxDrawerRef,
} from '@dcnx/mat-extensions/drawer';

@Component({
  selector: 'dev-drawer-demo',
  templateUrl: './drawer-demo.component.html',
  styleUrl: './drawer-demo.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class DrawerDemoComponent {
  position: DrawerPosition = 'right';
  width = '300px';
  height = '300px';
  hasBackdrop = true;
  disableClose = false;
  closeOnNavigation = true;

  animal?: string;
  name?: string;

  constructor(private drawer: MtxDrawer) {}

  open() {
    const drawerRef = this.drawer.open(DrawerOverviewComponent, {
      position: this.position,
      width: this.width,
      height: this.height,
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
  standalone: true,
  imports: [MatFormField, MatInput, ReactiveFormsModule, FormsModule, MatButton],
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
