import { HttpClient } from '@angular/common/http';
import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { map, of } from 'rxjs';

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

const baseUrl = 'https://raw.githubusercontent.com/ng-matero/extensions/refs/heads/main';

@Component({
  selector: 'doc-viewer',
  template: `
    @if (html.isLoading()) {
      <p>Loading...</p>
    } @else {
      <div class="docs-markdown" [innerHTML]="html.value() ?? ''"></div>
    }
  `,
  styleUrl: './doc-viewer.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DocViewer {
  private readonly http = inject(HttpClient);

  readonly path = input('');

  readonly html = rxResource({
    params: () => this.path(),
    stream: ({ params: path }) => {
      if (!path) return of('');

      const url = path.startsWith('/')
        ? `${baseUrl}${path}`
        : `${baseUrl}/projects/docs/src/app/pages/components/${path}`;

      return this.http
        .get(url, { responseType: 'text' })
        .pipe(map(markdown => marked.parse(markdown) as string));
    },
  });
}
