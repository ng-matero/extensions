# Ng-Matero Extensions

[![CodeFactor](https://www.codefactor.io/repository/github/ng-matero/extensions/badge)](https://www.codefactor.io/repository/github/ng-matero/extensions)
[![npm](https://img.shields.io/npm/v/@ng-matero/extensions.svg)](https://www.npmjs.com/package/@ng-matero/extensions)
[![GitHub Release Date](https://img.shields.io/github/release-date/ng-matero/extensions)](https://github.com/ng-matero/extensions/releases)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ng-matero/extensions/blob/main/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/ng-matero/extensions.svg)](https://gitter.im/matero-io/extensions)

The Ng-Matero Extensions is an extended component library for Angular Material.

## Documentation

Check out the [demos and APIs](https://ng-matero.github.io/extensions/).

## Installation

At first, you should install the Angular Material and setup it. [Learn more about the setup](https://material.angular.io/guide/getting-started).

Install the Extensions library:

```bash
$ npm install @ng-matero/extensions --save
```

## Setup

Import the modules you need, e.g. data-grid and select.

```ts
import { MtxGridModule } from '@ng-matero/extensions/grid';
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

After import modules, you must define a theme. [More about theming](https://material.angular.io/guide/theming).

### M2 theme

```scss
@use '@angular/material' as mat;
@use '@ng-matero/extensions' as mtx;

$theme: mat.define-light-theme(...);

@include mat.all-component-themes($theme);
@include mtx.all-component-themes($theme);
```

### M3 theme

```scss
@use '@angular/material' as mat;
@use '@ng-matero/extensions' as mtx;

$config: (...);

$theme: mat.private-deep-merge-all(
  mat.define-theme($config),
  mtx.define-theme($config)
);

html {
  @include mat.all-component-themes($theme);
  @include mtx.all-component-themes($theme);
}
```

The @use-based Sass API is only available in the version `12.0.0` and above.

You can also [using a pre-built theme](https://material.angular.io/guide/theming#pre-built-themes) which in the "prebuilt-themes" directory of the npm package (@ng-matero/extensions/prebuilt-themes).

```scss
@import '@ng-matero/extensions/prebuilt-themes/azure-blue.css'
```

## Development

```bash
$ git clone git@github.com:ng-matero/extensions.git
$ cd extensions
$ yarn
$ yarn run start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

MIT
