import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentNav } from './component-nav';

describe('ComponentNav', () => {
  let component: ComponentNav;
  let fixture: ComponentFixture<ComponentNav>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentNav],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
