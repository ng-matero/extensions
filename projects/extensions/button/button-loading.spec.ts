import { Component } from '@angular/core';
import { waitForAsync, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { MatButtonLoading } from './button-loading';
import { MtxButtonModule } from './button-module';

@Component({
  selector: 'test-app',
  template: ` <button mat-button [loading]="loading">Test Button</button> `,
})
class TestApp {
  public loading: boolean = false;
}

describe('ButtonLoading', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MtxButtonModule],
      declarations: [TestApp],
    });

    TestBed.compileComponents();
  }));
  it('button loading', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestApp);
    const testComponent = fixture.debugElement.componentInstance;
    const buttonDebugElement = fixture.debugElement.query(By.css('button'))!;
    const buttonNativeElement = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    testComponent.loading = true;
    tick();
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('mat-button-loading')).toBe(true);
    expect(buttonNativeElement.getAttribute('disabled'))
      .withContext('Expected button to be disabled')
      .toBeNull();
    const spinner1 = fixture.debugElement.query(
      By.directive(MatProgressSpinner)
    )!.componentInstance;
    expect(spinner1).withContext('Expected spinner to be existed').toBeTruthy();

    testComponent.loading = false;
    tick();
    fixture.detectChanges();
    expect(buttonDebugElement.nativeElement.classList.contains('mat-button-loading')).toBe(false);
    expect(buttonNativeElement.getAttribute('disabled'))
      .withContext('Expected button not to be disabled')
      .toBeFalsy();
    const spinner2 = fixture.debugElement.query(
      By.directive(MatProgressSpinner)
    )?.componentInstance;
    expect(spinner2).withContext('Expected spinner to be not existed').toBeFalsy();
    flush();
  }));
});
