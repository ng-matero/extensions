import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { ComponentNav } from './component-nav';
import { Observable } from 'rxjs';

const navItemsId = 'alert';

const mockActivatedRoute = {
  fragment: new Observable(observer => {
    observer.complete();
  }),
  params: new Observable(observer => {
    observer.next({ id: navItemsId });
    observer.complete();
  }),
};

describe('ComponentNav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: mockActivatedRoute }],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ComponentNav);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
