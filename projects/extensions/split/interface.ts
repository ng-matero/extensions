import { MtxSplitPaneDirective } from './split-pane.directive';

export interface MtxSplitPoint {
  x: number;
  y: number;
}

export interface MtxSplitArea {
  component: MtxSplitPaneDirective;
  order: number;
  size: number | null;
  minSize: number | null;
  maxSize: number | null;
}

// CREATED ON DRAG START

export interface MtxSplitSnapshot {
  gutterNum: number;
  allAreasSizePixel: number;
  allInvolvedAreasSizePercent: number;
  lastSteppedOffset: number;
  areasBeforeGutter: Array<MtxSplitAreaSnapshot>;
  areasAfterGutter: Array<MtxSplitAreaSnapshot>;
}

export interface MtxSplitAreaSnapshot {
  area: MtxSplitArea;
  sizePixelAtStart: number;
  sizePercentAtStart: number;
}

// CREATED ON DRAG PROGRESS

export interface MtxSplitSideAbsorptionCapacity {
  remain: number;
  list: Array<MtxSplitAreaAbsorptionCapacity>;
}

export interface MtxSplitAreaAbsorptionCapacity {
  areaSnapshot: MtxSplitAreaSnapshot;
  pixelAbsorb: number;
  percentAfterAbsorption: number;
  pixelRemain: number;
}

// CREATED TO SEND OUTSIDE

export interface MtxSplitOutputData {
  gutterNum: number;
  sizes: MtxSplitOutputAreaSizes;
}

export type MtxSplitOutputAreaSizes = Array<number | '*'>;
