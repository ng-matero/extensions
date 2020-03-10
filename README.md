# Ng-Matero Extensions

Angular Material Extensions

[![npm](https://img.shields.io/npm/v/@ng-matero/extensions.svg?style=flat-square)](https://www.npmjs.com/package/@ng-matero/extensions)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ng-matero/extensions/blob/dev/LICENSE)

## Installation

The Ng-Matero Extensions is just a extended library of Angular Material, so you need install the Angular Material first and setup it. [Learn more about setup](https://material.angular.io/guide/getting-started).

Install the Extensions library:

```bash
$ npm install @ng-matero/extensions --save
```

Once installed you need to import the main module:

```ts
import { MaterialExtensionsModule } from '@ng-matero/extensions';

@NgModule({
  ...
  imports: [MaterialExtensionsModule, ...],
  ...
})
export class YourAppModule {
}
```

## License

MIT
