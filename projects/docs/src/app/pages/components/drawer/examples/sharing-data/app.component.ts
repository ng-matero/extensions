import { Component, Inject } from '@angular/core';
import { MtxDrawer, MtxDrawerRef, MTX_DRAWER_DATA } from '@ng-matero/extensions/drawer';

@Component({
  selector: 'drawer-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
