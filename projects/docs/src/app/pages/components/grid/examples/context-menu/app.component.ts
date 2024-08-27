import { Component, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MtxGridColumn, MtxGridModule } from '@dcnx/mat-extensions/grid';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { EXAMPLE_DATA } from '../../data';

@Component({
  selector: 'data-grid-example',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MtxGridModule, MatMenuModule],
})
export class AppComponent {
  columns: MtxGridColumn[] = [
    {
      header: 'Name',
      field: 'name',
      minWidth: 200,
      maxWidth: 300,
    },
    {
      header: 'Weight',
      field: 'weight',
      minWidth: 200,
    },
    {
      header: 'Gender',
      field: 'gender',
      width: '100px',
      resizable: false,
    },
    {
      header: 'Mobile',
      field: 'mobile',
      maxWidth: 200,
    },
    {
      header: 'City',
      field: 'city',
      minWidth: 200,
    },
  ];

  list = EXAMPLE_DATA;

  @ViewChild(MatMenuTrigger) contextMenu!: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  private closingMenuSubscription!: Subscription;

  onContextMenu(e: any) {
    const { event, rowData, index } = e;
    event.preventDefault();

    this.contextMenu.closeMenu();

    const timer = this.contextMenu.menuOpen ? 150 : 0;
    setTimeout(() => this.contextMenu.openMenu(), timer);

    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { rowData, index };
    this.contextMenu.menu?.focusFirstItem('mouse');

    this.closingMenuSubscription = merge(
      fromEvent(document, 'click') as Observable<MouseEvent>,
      fromEvent(document, 'touchend') as Observable<MouseEvent>
    ).subscribe(_ => {
      this.contextMenu.closeMenu();
      this.closingMenuSubscription.unsubscribe();
    });
  }
}
