import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
