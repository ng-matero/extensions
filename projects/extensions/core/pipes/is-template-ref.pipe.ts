import { Pipe, PipeTransform, TemplateRef } from '@angular/core';

@Pipe({ name: 'isTemplateRef' })
export class MtxIsTemplateRefPipe implements PipeTransform {
  transform(obj: any) {
    return obj instanceof TemplateRef;
  }
}
