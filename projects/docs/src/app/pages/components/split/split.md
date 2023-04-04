# Split Pane

## API reference for Material Extensions split

`import { MtxSplitModule } from '@ng-matero/extensions/split';`

### Directives

#### `MtxSplit`

Selector: `[mtx-split]`

Exported as: `mtxSplit`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`dir: 'ltr' \| 'rtl'` | Indicates the directionality of the areas. Default is **`'ltr'`**. |
| `@Input()`<br>`direction: 'horizontal' \| 'vertical'` | Select split direction. Default is **`'horizontal'`**. |
| `@Input()`<br>`disabled: boolean` | Disable the dragging feature (remove cursor/image on gutters). Default is **`false`**. |
| `@Input()`<br>`gutterDblClickDuration: number` | Milliseconds to detect a double click on a gutter. Set it around 300-500ms if you want to use `gutterDblClick` event. Default is **`0`**. |
| `@Input()`<br>`gutterSize: number` | Gutters's size (dragging elements) in pixels. Default is **`4`**. |
| `@Input()`<br>`gutterStep: number` | Gutter step while moving in pixels. Default is **`1`**. |
| `@Input()`<br>`restrictMove: boolean` | Set to `true` if you want to limit gutter move to adjacent areas only. Default is **`false`**. |
| `@Input()`<br>`unit: 'percent' \| 'pixel'` | Selected unit you want to use. Default is **`percent`**. |
| `@Input()`<br>`useTransition: boolean` | Add transition when toggling visibility using `[visible]` or `[size]` changes. Default is **`false`**. |
| `@Output()`<br>`dragEnd: MtxSplitOutputData`| Emit when drag ends. |
| `@Output()`<br>`dragStart: MtxSplitOutputData`| Emit when drag starts. |
| `@Output()`<br>`gutterDblClick: MtxSplitOutputData`| Emit when user double clicks on a gutter. See `[gutterDblClickDuration]` input. |
| `@Output()`<br>`gutterClick: MtxSplitOutputData`| Emit when user clicks on a gutter. See `[gutterDblClickDuration]` input. |
| `@Output()`<br>`transitionEnd: Array<number>`| Emit when transition ends (could be triggered from `[visible]` or `[size]` changes). Only if `[useTransition]="true"`. |
| `dragProgress$: Observable<{gutterNum: number, sizes: Array<number>}>`| Emit when dragging. Replace old (dragProgress) template event for better flexibility about change detection mechanism.<br>Warning: Running outside zone by design, if you need to notify angular add `this.splitEl.dragProgress$.subscribe(x => this.ngZone.run(() => this.x = x));` |
| `getVisibleAreaSizes():	() => Array<number>` | Get all **visible** area sizes. |
| `setVisibleAreaSizes():	(Array<number>) => boolean` | Set all **visible** area sizes in one go, return a boolean to know if input values were correct. Useful when combined with `dragProgress$` to sync multiple splits. |

#### `MtxSplitPane`

Selector: `mtx-split-pane, [mtx-split-pane]`

Exported as: `mtxSplitPane`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`lockSize: boolean` | Lock area size, same as minSize = maxSize = size. <br>Not working when `[size]="'*'`" Default is **`false`**. |
| `@Input()`<br>`maxSize: number \| null` | Maximum pixel or percent size, should be equal to or larger than provided `[size]`. <br>Not working when `[size]="'*'"`. Default is **`null`**. |
| `@Input()`<br>`minSize: number \| null` | Minimum pixel or percent size, should be equal to or larger than provided `[size]`. <br>Not working when `[size]="'*'"`. Default is **`null`**. |
| `@Input()`<br>`order: number \| null` | Order of the area. Used to maintain the order of areas when toggling their visibility. Toggling area visibility without specifying an `order` leads to weird behavior. Default is **`null`**. |
| `@Input()`<br>`size: number \| '*'` | Size of the area in selected unit (`percent`/`pixel`). <br>**Percent mode:** All areas sizes should equal to `100`, If not, all areas will have the same size. <br>**Pixel mode:** An area with wildcard size (`[size]="'*'"`) is mandatory (only one) and can't have `[visible]="false"` or `minSize`/`maxSize`/`lockSize` properties. |
| `@Input()`<br>`visible: boolean` | Hide area visually but still present in the DOM, use `ngIf` to completely remove it. <br>Not working when `[size]="'*'`" Default is **`true`**. |

### Interfaces

#### `MtxSplitPoint`

```ts
interface MtxSplitPoint {
  x: number;
  y: number;
}
```

#### `MtxSplitArea`

```ts
interface MtxSplitArea {
  component: MtxSplitPane;
  order: number;
  size: number | null;
  minSize: number | null;
  maxSize: number | null;
}
```

#### `MtxSplitSnapshot`

```ts
interface MtxSplitSnapshot {
  gutterNum: number;
  allAreasSizePixel: number;
  allInvolvedAreasSizePercent: number;
  lastSteppedOffset: number;
  areasBeforeGutter: Array<MtxSplitAreaSnapshot>;
  areasAfterGutter: Array<MtxSplitAreaSnapshot>;
}
```

#### `MtxSplitAreaSnapshot`

```ts
interface MtxSplitAreaSnapshot {
  area: MtxSplitArea;
  sizePixelAtStart: number;
  sizePercentAtStart: number;
}
```

#### `MtxSplitSideAbsorptionCapacity`

```ts
interface MtxSplitSideAbsorptionCapacity {
  remain: number;
  list: Array<MtxSplitAreaAbsorptionCapacity>;
}
```

#### `MtxSplitAreaAbsorptionCapacity`

```ts
interface MtxSplitAreaAbsorptionCapacity {
  areaSnapshot: MtxSplitAreaSnapshot;
  pixelAbsorb: number;
  percentAfterAbsorption: number;
  pixelRemain: number;
}
```

#### `MtxSplitOutputData`

```ts
interface MtxSplitOutputData {
  gutterNum: number;
  sizes: MtxSplitOutputAreaSizes;
}
```

### Type aliases

#### `MtxSplitOutputAreaSizes`

```ts
type MtxSplitOutputAreaSizes = Array<number | '*'>;
```

### Constants

#### `MTX_SPLIT_DEFAULT_OPTIONS`

Injection token that can be used to specify default split options.

```ts
const MTX_SPLIT_DEFAULT_OPTIONS: InjectionToken<() => MtxSplitDefaultOptions>;
```
