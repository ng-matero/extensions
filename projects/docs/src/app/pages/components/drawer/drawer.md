# Drawer

## API reference for Material Extensions Drawer

`import { MtxDrawerModule } from '@ng-matero/extensions/drawer';`

### Services

#### `MtxDrawer`

Service to open Material Design drawers.

##### Properties

| Name | Description |
| :--- | :--- |
| `afterAllDismissed: Observable<void>` | Stream that emits when all open drawers have finished closing. Will emit on subscribe if there are no open drawers to begin with. |
| `afterOpened: Subject<afterOpened<any>>` | Stream that emits when a drawer has been opened. |
| `openDrawers: MtxDrawerRef<any>[]` | Keeps track of the currently-open drawers. |

##### Methods

<a>dismissAll</a>

Dismissed all of the currently-open dialogs.

<hr>

<a>getDrawerById</a>

Finds an open drawer by its id.

<hr>

<a>open</a>

Opens a drawer containing the given component.

| Parameters |  |
| :--- | :--- |
| `component: ComponentType<T>` | Type of the component to load into the drawer. |
| `config: MtxDrawerConfig<D>` | Extra configuration options. |

<a>open</a>

Opens a drawer containing the given template.

| Parameters |  |
| :--- | :--- |
| `template: TemplateRef<T>` | TemplateRef to instantiate as the drawer content. |
| `config: MtxDrawerConfig<D>` | Extra configuration options. |

<a>open</a>

| Parameters |  |
| :--- | :--- |
| `componentOrTemplateRef: ComponentType<T> \| TemplateRef<T>` | TemplateRef to instantiate as the drawer content. |
| `config: MtxDrawerConfig<D>` | Extra configuration options. |

### Classes

#### MtxDrawerConfig

Configuration used when opening a drawer.

##### Properties

| Name | Description |
| :--- | :--- |
| `ariaLabel: string \| null` | Aria label to assign to the drawer element. |
| `autoFocus: AutoFocusTarget \| string \| boolean` | Where the drawer should focus on open. |
| `backdropClass: string` | Custom class for the backdrop. |
| `closeOnNavigation: boolean` | Whether the drawer should close when the user goes backwards/forwards in history. Note that this usually doesn't include clicking on links (unless the user is using the HashLocationStrategy). |
| `data: D \| null` | Data being injected into the child component. |
| `direction: Direction` | Text layout direction for the drawer. |
| `disableClose: boolean` | Whether the user can use escape or clicking outside to close the drawer. |
| `hasBackdrop: boolean` | Whether the drawer has a backdrop. |
| `panelClass: string \| string[]` | Extra CSS classes to be added to the drawer container. |
| `restoreFocus: boolean` | Whether the drawer should restore focus to the previously-focused element, after it's closed. |
| `scrollStrategy: ScrollStrategy` | Scroll strategy to be used for the drawer. |
| `viewContainerRef: ViewContainerRef` | The view container to place the overlay for the drawer into. |
| `id: string` | ID for the drawer. If omitted, a unique one will be generated. |
| `position: DrawerPosition` | Position of the drawer. |
| `width: string` | Width of the drawer. |
| `height: string` | Height of the drawer. |
| `minWidth: number \| string` | Min-width of the drawer. If a number is provided, assumes pixel units. |
| `minHeight: number \| string` | Min-height of the drawer. If a number is provided, assumes pixel units. |
| `maxWidth: number \| string` | Max-width of the drawer. If a number is provided, assumes pixel units. |
| `maxHeight: number \| string` | Max-height of the drawer. If a number is provided, assumes pixel units. |

#### MtxDrawerRef

Reference to a drawer dispatched from the drawer service.

##### Properties

| Name | Description |
| :--- | :--- |
| `componentRef: ComponentRef<T> \| null` | Unique ID for the drawer. |
| `disableClose: boolean \| undefined` | ComponentRef of the component opened into the drawer. Will be null when the drawer is opened using a TemplateRef. |
| `instance: T` | Instance of the component making up the content of the drawer. |
| `id: string` | Unique ID for the drawer. |

### Type aliases

#### `AutoFocusTarget`

Options for where to set focus to automatically on dialog open.

```ts
type AutoFocusTarget = 'dialog' | 'first-tabbable' | 'first-heading';
```

#### `DrawerPosition`

Possible overrides for a drawer's position.

```ts
type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';
```

### Constants

#### `MTX_DRAWER_DEFAULT_OPTIONS`

Injection token that can be used to specify default drawer options.

```ts
const MTX_DRAWER_DEFAULT_OPTIONS: InjectionToken<MtxDrawerConfig>;
```

#### `MTX_DRAWER_DATA`

Injection token that can be used to access the data that was passed in to a drawer.

```ts
const MTX_DRAWER_DATA: InjectionToken<any>;
```

### `mtxDrawerAnimations`

Animations used by the Material drawer.

```ts
const mtxDrawerAnimations: { readonly drawerState: AnimationTriggerMetadata; };
```
