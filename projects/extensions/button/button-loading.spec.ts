import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { vi } from 'vitest';
import { MatButtonLoading } from './button-loading';
import { MtxButtonModule } from './button-module';

@Component({
  template: `
    <button matButton [loading]="isLoading" [disabled]="isDisabled">Click me</button>
  `,
  imports: [MtxButtonModule, MatButtonModule],
})
class TestHostComponent {
  isLoading = false;
  isDisabled = false;
}

describe('MatButtonLoading Directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let buttonEl: HTMLButtonElement;
  let directiveInstance: MatButtonLoading;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, MtxButtonModule, MatButtonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;

    directiveInstance = fixture.debugElement
      .query(By.directive(MatButtonLoading))
      .injector.get(MatButtonLoading);

    fixture.detectChanges();
  });

  it('should add loading class and disable button when loading becomes true', async () => {
    vi.useFakeTimers();

    directiveInstance.loading = true;
    directiveInstance.ngOnChanges({
      loading: {
        previousValue: false,
        currentValue: true,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    fixture.detectChanges();

    expect(buttonEl.classList.contains('mat-button-loading')).toBe(true);
    expect(buttonEl.querySelector('mat-progress-spinner')).toBeTruthy();

    await vi.advanceTimersByTimeAsync(0);
    fixture.detectChanges();

    expect(buttonEl.classList.contains('mat-mdc-button-disabled')).toBe(true);
    expect(buttonEl.hasAttribute('disabled')).toBe(true);

    vi.useRealTimers();
  });

  it('should remove loading class and re-enable button when loading becomes false', async () => {
    vi.useFakeTimers();

    directiveInstance.loading = true;
    directiveInstance.ngOnChanges({
      loading: {
        previousValue: false,
        currentValue: true,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(0);

    directiveInstance.loading = false;
    directiveInstance.ngOnChanges({
      loading: {
        previousValue: true,
        currentValue: false,
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    fixture.detectChanges();

    expect(buttonEl.classList.contains('mat-button-loading')).toBe(false);
    expect(buttonEl.querySelector('mat-progress-spinner')).toBeFalsy();

    await vi.advanceTimersByTimeAsync(0);
    fixture.detectChanges();

    expect(buttonEl.classList.contains('mat-mdc-button-disabled')).toBe(false);
    expect(buttonEl.hasAttribute('disabled')).toBe(false);

    vi.useRealTimers();
  });

  it('should not override disabled state if button was already disabled', async () => {
    vi.useFakeTimers();

    fixture.componentInstance.isDisabled = true;
    fixture.detectChanges();

    directiveInstance.loading = true;
    directiveInstance.ngOnChanges({
      loading: {
        previousValue: false,
        currentValue: true,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(0);

    expect(buttonEl.hasAttribute('disabled')).toBe(true);

    vi.useRealTimers();
  });
});
