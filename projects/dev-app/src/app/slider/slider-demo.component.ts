import { Component } from '@angular/core';

@Component({
  selector: 'dev-slider-demo',
  templateUrl: './slider-demo.component.html',
  styleUrls: ['./slider-demo.component.scss'],
})
export class SliderDemoComponent {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value: number | number[] = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  isRangeSlider = false;

  toggleRangeSlider() {
    if (this.isRangeSlider) {
      this.value = [0, 100];
    } else {
      this.value = 0;
    }
  }
}
