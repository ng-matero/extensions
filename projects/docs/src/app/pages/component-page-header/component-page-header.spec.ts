import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ComponentPageHeader } from './component-page-header';

describe('ComponentPageHeader', () => {
  let fixture: ComponentFixture<ComponentPageHeader>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPageHeader);
  });

  it('should emit a toggleSideNav event', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    vi.spyOn(component.toggleSidenav, 'emit').mockReturnValue(undefined);
    fixture.nativeElement.querySelector('button').click();
    expect(component.toggleSidenav.emit).toHaveBeenCalled();
  });
});
