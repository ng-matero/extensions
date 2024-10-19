import { ElementRef } from '@angular/core';

import {
  MtxSplitArea,
  MtxSplitPoint,
  MtxSplitAreaSnapshot,
  MtxSplitSideAbsorptionCapacity,
  MtxSplitAreaAbsorptionCapacity,
} from './interfaces';

export function getPointFromEvent(event: MouseEvent | TouchEvent): MtxSplitPoint | null {
  // TouchEvent
  if (
    (event as TouchEvent).changedTouches !== undefined &&
    (event as TouchEvent).changedTouches.length > 0
  ) {
    return {
      x: (event as TouchEvent).changedTouches[0].clientX,
      y: (event as TouchEvent).changedTouches[0].clientY,
    };
  }
  // MouseEvent
  else if (
    (event as MouseEvent).clientX !== undefined &&
    (event as MouseEvent).clientY !== undefined
  ) {
    return {
      x: (event as MouseEvent).clientX,
      y: (event as MouseEvent).clientY,
    };
  }
  return null;
}

export function getElementPixelSize(
  elRef: ElementRef,
  direction: 'horizontal' | 'vertical'
): number {
  const rect = (elRef.nativeElement as HTMLElement).getBoundingClientRect();

  return direction === 'horizontal' ? rect.width : rect.height;
}

export function getInputPositiveNumber<T>(v: any, defaultValue: T): number | T {
  if (v === null || v === undefined) {
    return defaultValue;
  }

  v = Number(v);
  return !isNaN(v) && v >= 0 ? v : defaultValue;
}

export function isUserSizesValid(
  unit: 'percent' | 'pixel',
  sizes: number[]
): boolean | number | void {
  // All sizes have to be not null and total should be 100
  if (unit === 'percent') {
    const total = sizes.reduce((_total, s) => (s !== null ? _total + s : _total), 0);
    return sizes.every(s => s !== null) && total && total > 99.9 && total < 100.1;
  }

  // A size at null is mandatory but only one.
  if (unit === 'pixel') {
    return sizes.filter(s => s === null).length === 1;
  }
}

export function getAreaMinSize(a: MtxSplitArea): null | number {
  if (a.size === null) {
    return null;
  }

  if (a.component.lockSize === true) {
    return a.size;
  }

  if (a.component.minSize === null) {
    return null;
  }

  if (a.component.minSize > a.size) {
    return a.size;
  }

  return a.component.minSize;
}

export function getAreaMaxSize(a: MtxSplitArea): null | number {
  if (a.size === null) {
    return null;
  }

  if (a.component.lockSize === true) {
    return a.size;
  }

  if (a.component.maxSize === null) {
    return null;
  }

  if (a.component.maxSize < a.size) {
    return a.size;
  }

  return a.component.maxSize;
}

export function getGutterSideAbsorptionCapacity(
  unit: 'percent' | 'pixel',
  sideAreas: MtxSplitAreaSnapshot[],
  pixels: number,
  allAreasSizePixel: number
): MtxSplitSideAbsorptionCapacity {
  return sideAreas.reduce(
    (acc: any, area) => {
      const res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
      acc.list.push(res);
      acc.remain = res && res.pixelRemain;
      return acc;
    },
    { remain: pixels, list: [] }
  );
}

export function getAreaAbsorptionCapacity(
  unit: 'percent' | 'pixel',
  areaSnapshot: MtxSplitAreaSnapshot,
  pixels: number,
  allAreasSizePixel: number
): MtxSplitAreaAbsorptionCapacity | void {
  // No pain no gain
  if (pixels === 0) {
    return {
      areaSnapshot,
      pixelAbsorb: 0,
      percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
      pixelRemain: 0,
    };
  }

  // Area start at zero and need to be reduced, not possible
  if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
    return {
      areaSnapshot,
      pixelAbsorb: 0,
      percentAfterAbsorption: 0,
      pixelRemain: pixels,
    };
  }

  if (unit === 'percent') {
    return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
  }

  if (unit === 'pixel') {
    return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, allAreasSizePixel);
  }
}

export function getAreaAbsorptionCapacityPercent(
  areaSnapshot: MtxSplitAreaSnapshot,
  pixels: number,
  allAreasSizePixel: number
): MtxSplitAreaAbsorptionCapacity | void {
  const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
  const tempPercentSize = (tempPixelSize / allAreasSizePixel) * 100;

  // ENLARGE AREA

  if (pixels > 0) {
    // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
    if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
      // Use area.area.maxSize as newPercentSize and return calculate pixels remaining
      const maxSizePixel = (areaSnapshot.area.maxSize / 100) * allAreasSizePixel;
      return {
        areaSnapshot,
        pixelAbsorb: maxSizePixel,
        percentAfterAbsorption: areaSnapshot.area.maxSize,
        pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel,
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
      pixelRemain: 0,
    };
  }

  // REDUCE AREA
  else if (pixels < 0) {
    // If minSize & newSize smaller than it > absorb to min and return remaining pixels
    if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
      // Use area.area.minSize as newPercentSize and return calculate pixels remaining
      const minSizePixel = (areaSnapshot.area.minSize / 100) * allAreasSizePixel;
      return {
        areaSnapshot,
        pixelAbsorb: minSizePixel,
        percentAfterAbsorption: areaSnapshot.area.minSize,
        pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel,
      };
    }
    // If reduced under zero > return remaining pixels
    else if (tempPercentSize < 0) {
      // Use 0 as newPercentSize and return calculate pixels remaining
      return {
        areaSnapshot,
        pixelAbsorb: -areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: 0,
        pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: tempPercentSize,
      pixelRemain: 0,
    };
  }
}

export function getAreaAbsorptionCapacityPixel(
  areaSnapshot: MtxSplitAreaSnapshot,
  pixels: number,
  containerSizePixel: number
): MtxSplitAreaAbsorptionCapacity | void {
  const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;

  // ENLARGE AREA

  if (pixels > 0) {
    // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
    if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
      return {
        areaSnapshot,
        pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: -1,
        pixelRemain: tempPixelSize - areaSnapshot.area.maxSize,
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: -1,
      pixelRemain: 0,
    };
  }

  // REDUCE AREA
  else if (pixels < 0) {
    // If minSize & newSize smaller than it > absorb to min and return remaining pixels
    if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
      return {
        areaSnapshot,
        pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
        percentAfterAbsorption: -1,
        pixelRemain: tempPixelSize - areaSnapshot.area.minSize,
      };
    }
    // If reduced under zero > return remaining pixels
    else if (tempPixelSize < 0) {
      return {
        areaSnapshot,
        pixelAbsorb: -areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: -1,
        pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: -1,
      pixelRemain: 0,
    };
  }
}

export function updateAreaSize(unit: 'percent' | 'pixel', item: MtxSplitAreaAbsorptionCapacity) {
  if (unit === 'percent') {
    item.areaSnapshot.area.size = item.percentAfterAbsorption;
  } else if (unit === 'pixel') {
    // Update size except for the wildcard size area
    if (item.areaSnapshot.area.size !== null) {
      item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
    }
  }
}
