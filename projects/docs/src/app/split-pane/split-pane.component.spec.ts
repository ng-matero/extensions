import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitPaneComponent } from './split-pane.component';

describe('SplitPaneComponent', () => {
  let component: SplitPaneComponent;
  let fixture: ComponentFixture<SplitPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
