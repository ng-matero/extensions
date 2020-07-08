# Ng-Matero Extensions

[![npm](https://img.shields.io/npm/v/@ng-matero/extensions.svg)](https://www.npmjs.com/package/@ng-matero/extensions)
[![GitHub Release Date](https://img.shields.io/github/release-date/ng-matero/extensions)](https://github.com/ng-matero/extensions/releases)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ng-matero/extensions/blob/dev/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/ng-matero/extensions.svg)](https://gitter.im/matero-io/extensions)
[![API docs](https://img.shields.io/badge/API%20docs-gitbook-red)](https://nzbin.gitbook.io/material-extensions/)

The Ng-Matero Extensions is an extended library of Angular Material.

## Installation

At first, you should install the Angular Material and setup it. [Learn more about the setup](https://material.angular.io/guide/getting-started).

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

Alternatively you could only import modules you need, e.g. color-picker and select.

```ts
import { MtxColorPickerModule, MtxSelectModule } from '@ng-matero/extensions';

@NgModule({
  ...
  imports: [MtxColorPickerModule, MtxSelectModule, ...],
  ...
})
export class YourAppModule {
}
```

## Roadmap

Check [the projects](https://github.com/ng-matero/extensions/projects) to know the develop plans.

## License

MIT
