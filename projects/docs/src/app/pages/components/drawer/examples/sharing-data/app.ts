import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MTX_DRAWER_DATA, MtxDrawer, MtxDrawerRef } from '@ng-matero/extensions/drawer';

@Component({
  selector: 'drawer-sharing-data-example',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class App {
  private drawer = inject(MtxDrawer);

  animal?: string;
  name?: string;

  open() {
    const drawerRef = this.drawer.open(DrawerSharingDataOverviewDrawer, {
      width: '300px',
      data: { name: this.name, animal: this.animal },
    });

    drawerRef.afterDismissed().subscribe(result => {
      console.log('The drawer was dismissed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'drawer-overview',
  template: `
    <h1 class="heading">
      Hi, {{ data.name }}
      <span class="flex-spacer"></span>
      <button mat-icon-button (click)="onNoClick()">
        <mat-icon>close</mat-icon>
      </button>
    </h1>
    <div>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <mat-label>Favorite Animal</mat-label>
        <input matInput [(ngModel)]="data.animal" />
      </mat-form-field>
    </div>
    <div>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button (click)="onOkClick()" cdkFocusInitial>Ok</button>
    </div>
  `,
  styles: `
    .heading {
      display: flex;
      align-items: center;
    }

    .flex-spacer {
      flex-grow: 1;
    }
  `,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DrawerSharingDataOverviewDrawer {
  drawerRef = inject<MtxDrawerRef<DrawerSharingDataOverviewDrawer>>(MtxDrawerRef);
  data = inject(MTX_DRAWER_DATA);

  onNoClick(): void {
    this.drawerRef.dismiss();
  }

  onOkClick() {
    this.drawerRef.dismiss(this.data.animal);
  }
}
