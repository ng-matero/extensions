import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MTX_DRAWER_DATA, MtxDrawer, MtxDrawerRef } from '@dcnx/mat-extensions/drawer';

@Component({
  selector: 'drawer-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class AppComponent {
  animal?: string;
  name?: string;

  constructor(private drawer: MtxDrawer) {}

  open() {
    const drawerRef = this.drawer.open(DrawerSharingDataOverviewComponent, {
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
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DrawerSharingDataOverviewComponent {
  constructor(
    public drawerRef: MtxDrawerRef<DrawerSharingDataOverviewComponent>,
    @Inject(MTX_DRAWER_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.drawerRef.dismiss();
  }

  onOkClick() {
    this.drawerRef.dismiss(this.data.animal);
  }
}
