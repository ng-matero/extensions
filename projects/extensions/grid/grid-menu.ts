import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MtxGridCellActionDisablePipe } from './grid-pipes';
import { MtxGridMenuItem } from './interfaces';

@Component({
  selector: 'mtx-grid-menu',
  exportAs: 'mtxGridMenu',
  template: `
    <mat-menu class="mtx-grid-menu">
      @for (item of items; track $index) {
        @if (!item.iif || item.iif(data)) {
          @if (item.children && item.children.length > 0) {
            <button
              mat-menu-item
              [matMenuTriggerFor]="gridMenu.menu"
              [disabled]="item | cellActionDisable: data"
              [class]="item.class"
              (click)="item.click?.(data)"
            >
              <mat-icon *ngTemplateOutlet="iconTpl; context: { $implicit: item }" />
              <span>{{ item.text }}</span>
            </button>

            <mtx-grid-menu #gridMenu [items]="item.children" [data]="data" />
          } @else {
            <button
              mat-menu-item
              [disabled]="item | cellActionDisable: data"
              [class]="item.class"
              (click)="item.click?.(data)"
            >
              <mat-icon *ngTemplateOutlet="iconTpl; context: { $implicit: item }" />
              <span>{{ item.text }}</span>
            </button>
          }
        }
      }
    </mat-menu>

    <ng-template #iconTpl let-item>
      @if (item.icon) {
        <mat-icon class="mtx-grid-icon">{{ item.icon }}</mat-icon>
      } @else if (item.fontIcon) {
        <mat-icon class="mtx-grid-icon" [fontIcon]="item.fontIcon"></mat-icon>
      } @else if (item.svgIcon) {
        <mat-icon class="mtx-grid-icon" [svgIcon]="item.svgIcon"></mat-icon>
      }
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatIcon,
    MtxGridMenu,
    MtxGridCellActionDisablePipe,
  ],
})
export class MtxGridMenu {
  @ViewChild(MatMenu, { static: true }) menu!: MatMenu;

  @Input() items: MtxGridMenuItem[] = [];

  @Input() data: Record<string, any> = {};
}
