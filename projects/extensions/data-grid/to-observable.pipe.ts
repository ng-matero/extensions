import { Pipe, PipeTransform, Injector } from '@angular/core';
import { Observable, of, isObservable } from 'rxjs';

@Pipe({ name: 'toObservable' })
export class MtxGridToObservablePipe implements PipeTransform {
  transform(value: string | Observable<any>): Observable<string> {
    return isObservable(value) ? value : of(value);
  }
}
