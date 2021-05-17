# Ng-Matero Extensions

[![npm](https://img.shields.io/npm/v/@ng-matero/extensions.svg)](https://www.npmjs.com/package/@ng-matero/extensions)
[![GitHub Release Date](https://img.shields.io/github/release-date/ng-matero/extensions)](https://github.com/ng-matero/extensions/releases)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ng-matero/extensions/blob/dev/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/ng-matero/extensions.svg)](https://gitter.im/matero-io/extensions)
[![API docs](https://img.shields.io/badge/API%20docs-gitbook-red)](https://nzbin.gitbook.io/material-extensions/)

The Ng-Matero Extensions is an extended component library of Angular Material.

## Installation

At first, you should install the Angular Material and setup it. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the Extensions library:

```bash
$ npm install @ng-matero/extensions --save
```

## Setup

Once installed you need to import the main module:

```ts
import { MaterialExtensionsModule, MaterialExtensionsExperimentalModule } from '@ng-matero/extensions';

@NgModule({
  ...
  imports: [MaterialExtensionsModule, MaterialExtensionsExperimentalModule, ...],
  ...
})
export class YourAppModule {
}
```

Alternatively you could only import modules you need, e.g. data-grid and select.

```ts
import { MtxGridModule } from '@ng-matero/extensions/data-grid';
import { MtxSelectModule } from '@ng-matero/extensions/select';

@NgModule({
  ...
  imports: [MtxGridModule, MtxSelectModule, ...],
  ...
})
export class YourAppModule {
}
```

## Theming

After import modules, you must define a theme. [More details about theming](https://material.angular.io/guide/theming).

```scss
@import '~@ng-matero/extensions/theming';

@include material-extensions-theme($theme);
@include material-extensions-experimental-theme($theme);
```

## Roadmap

Check [projects](https://github.com/ng-matero/extensions/projects) to know the develop plans.

## License

MIT
