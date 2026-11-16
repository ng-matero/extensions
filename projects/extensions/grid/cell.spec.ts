import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MtxGridModule } from './grid-module';
import { MtxGridColumn } from './interfaces';

@Component({
  template: `
    <mtx-grid [data]="data" [columns]="columns" />
  `,
  imports: [MtxGridModule],
})
class TestHostComponent {
  data = [{ name: 'Jane Doe' }];
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    {
      header: 'Actions',
      field: 'actions',
      type: 'button',
      buttons: [
        { type: 'icon', icon: 'edit', class: 'tooltip-only', tooltip: 'Edit' },
        {
          type: 'icon',
          icon: 'delete',
          class: 'explicit-label',
          tooltip: 'Delete',
          ariaLabel: 'Delete row',
        },
        {
          type: 'icon',
          icon: 'person',
          class: 'row-label',
          ariaLabel: row => `Open ${row.name}`,
        },
        { type: 'icon', icon: 'star', class: 'observable-label', ariaLabel: of('Favorite') },
        {
          type: 'icon',
          icon: 'more_vert',
          class: 'menu-trigger',
          tooltip: { message: 'More actions' },
          children: [{ text: 'Copy' }],
        },
        { type: 'icon', icon: 'info', class: 'no-label' },
        { type: 'text', text: 'View', class: 'text-button', tooltip: 'View details' },
        { type: 'filled', icon: 'edit', class: 'filled-icon-label', ariaLabel: 'Edit row' },
        {
          type: 'icon',
          icon: 'label',
          class: 'empty-label',
          tooltip: 'Tag',
          ariaLabel: () => '',
        },
        {
          type: 'filled',
          icon: 'more_vert',
          class: 'filled-menu-label',
          ariaLabel: 'More',
          children: [{ text: 'Copy' }],
        },
      ],
    },
  ];
}

describe('MtxGridCell action buttons', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  function getButton(className: string): HTMLButtonElement {
    return fixture.nativeElement.querySelector(`button.${className}`);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should fall back to the tooltip message for icon buttons', () => {
    expect(getButton('tooltip-only').getAttribute('aria-label')).toBe('Edit');
  });

  it('should not describe an icon button with a tooltip equal to its label', () => {
    expect(getButton('tooltip-only').hasAttribute('aria-describedby')).toBe(false);
  });

  it('should prefer ariaLabel over the tooltip message', () => {
    expect(getButton('explicit-label').getAttribute('aria-label')).toBe('Delete row');
  });

  it('should build the label from the row data', () => {
    expect(getButton('row-label').getAttribute('aria-label')).toBe('Open Jane Doe');
  });

  it('should accept an observable label', () => {
    expect(getButton('observable-label').getAttribute('aria-label')).toBe('Favorite');
  });

  it('should label icon buttons that open a menu', () => {
    expect(getButton('menu-trigger').getAttribute('aria-label')).toBe('More actions');
  });

  it('should not set an empty aria-label when there is no label or tooltip', () => {
    expect(getButton('no-label').hasAttribute('aria-label')).toBe(false);
  });

  it('should not override the visible text of text buttons', () => {
    expect(getButton('text-button').hasAttribute('aria-label')).toBe(false);
  });

  it('should apply an explicit ariaLabel to non-icon buttons', () => {
    expect(getButton('filled-icon-label').getAttribute('aria-label')).toBe('Edit row');
  });

  it('should fall back to the tooltip message when ariaLabel is empty', () => {
    expect(getButton('empty-label').getAttribute('aria-label')).toBe('Tag');
  });

  it('should apply an explicit ariaLabel to non-icon buttons that open a menu', () => {
    expect(getButton('filled-menu-label').getAttribute('aria-label')).toBe('More');
  });
});
