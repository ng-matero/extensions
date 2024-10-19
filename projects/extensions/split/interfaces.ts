import { ThemePalette } from '@angular/material/core';
import { MtxSplitPane } from './split-pane';

export interface MtxSplitPoint {
  x: number;
  y: number;
}

export interface MtxSplitArea {
  component: MtxSplitPane;
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
  areasBeforeGutter: MtxSplitAreaSnapshot[];
  areasAfterGutter: MtxSplitAreaSnapshot[];
}

export interface MtxSplitAreaSnapshot {
  area: MtxSplitArea;
  sizePixelAtStart: number;
  sizePercentAtStart: number;
}

// CREATED ON DRAG PROGRESS

export interface MtxSplitSideAbsorptionCapacity {
  remain: number;
  list: MtxSplitAreaAbsorptionCapacity[];
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

export type MtxSplitOutputAreaSizes = (number | '*')[];

export interface MtxSplitDefaultOptions {
  color?: ThemePalette;
  dir?: 'ltr' | 'rtl';
  direction?: 'horizontal' | 'vertical';
  unit?: 'percent' | 'pixel';
  gutterDblClickDuration?: number;
  gutterSize?: number;
  gutterStep?: number;
  restrictMove?: boolean;
  useTransition?: boolean;
}
