import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HighlightModule } from 'ngx-highlightjs';
import { of } from 'rxjs';

const baseUrl = 'https://raw.githubusercontent.com/ng-matero/extensions/refs/heads/main';

@Component({
  selector: 'code-snippet',
  template: `
    @if (code.isLoading()) {
      <p>Loading...</p>
    } @else {
      <pre><code [highlight]="code.value() ?? ''" [language]="language()"></code></pre>
    }
  `,
  styles: `
    pre {
      margin: 0;
    }

    .hljs {
      padding: 0;
    }
  `,
  imports: [HighlightModule],
})
export class CodeSnippet {
  private readonly http = inject(HttpClient);

  readonly path = input('');

  readonly code = rxResource({
    params: () => this.path(),
    stream: ({ params: path }) => {
      if (!path) return of('');

      const url = path.startsWith('/')
        ? `${baseUrl}${path}`
        : `${baseUrl}/projects/docs/src/app/pages/components/${path}`;

      return this.http.get(url, { responseType: 'text' });
    },
  });

  readonly language = computed(() => this.path().split('.').pop() || '');

  getRawText() {
    return this.code.value() ?? '';
  }
}
