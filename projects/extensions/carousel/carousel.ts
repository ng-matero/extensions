import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  HostListener,
  OnDestroy,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject, interval, takeUntil } from 'rxjs';
import { MtxCarouselSlide } from './slide';
import { DOWN_ARROW, END, HOME, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';

@Component({
  selector: 'mtx-carousel',
  exportAs: 'mtxCarousel',
  host: {
    class: 'mtx-carousel',
  },
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MtxCarousel implements AfterContentInit, AfterViewInit, OnDestroy {
  selectedIndex = 0;
  timer$ = new Observable<number>();
  stopSubject = new Subject<void>();
  timerIsStopped = false;

  intervalTime = 3000;
  autoPlay = true;
  showAutoPlay = true;
  showIndexPan = true;
  showPrevNextButtons = true;
  effectAutoPlayOnMouse = true;
  enableMouseClick = true;
  enableMouseWheel = true;
  enableKeyboard = true;
  infiniteLoop = true;
  directionLoop: 'toRight' | 'toLeft' = 'toRight';

  @ContentChildren(MtxCarouselSlide) slides!: QueryList<MtxCarouselSlide>;

  ngAfterContentInit(): void {
    console.log(this.slides);
  }

  ngAfterViewInit(): void {
    this.resetTimer();
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopSubject.next();
    this.stopSubject.complete();
  }

  @HostListener('click')
  onClick() {
    if (this.enableMouseClick) {
      this.nextIndex();
      this.resetTimer();
      this.startTimer();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown($event: KeyboardEvent) {
    if (this.enableKeyboard) {
      switch ($event.keyCode) {
        case HOME:
          this.selectedIndex = 0;
          break;
        case END:
          this.selectedIndex = this.slides.length - 1;
          break;
        case LEFT_ARROW:
          this.decrementSelectedIndex();
          break;
        case DOWN_ARROW:
          this.decrementSelectedIndex();
          break;
        case RIGHT_ARROW:
          this.incrementSelectedIndex();
          break;
        case UP_ARROW:
          this.incrementSelectedIndex();
          break;
        default:
          return;
      }
      this.resetTimer();
      this.startTimer();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.effectAutoPlayOnMouse) {
      this.timerIsStopped = true;
      this.stopTimer();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.effectAutoPlayOnMouse) {
      this.timerIsStopped = false;
      this.startTimer();
    }
  }

  @HostListener('mousewheel', ['$event'])
  onMouseWheel($event: WheelEvent) {
    if (this.enableMouseWheel) {
      $event.preventDefault();
      const deltaY = Math.sign($event.deltaY);

      if (deltaY < 0) {
        this.incrementSelectedIndex();
      } else if (deltaY > 0) {
        this.decrementSelectedIndex();
      }
      this.resetTimer();
      this.startTimer();
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timer$ = interval(this.intervalTime);
  }

  startTimer() {
    if (!this.timerIsStopped) {
      this.timer$.pipe(takeUntil(this.stopSubject)).subscribe(() => {
        if (this.autoPlay) {
          this.nextIndex();
        }
      });
    }
  }

  stopTimer() {
    this.stopSubject.next();
  }

  incrementSelectedIndex() {
    if (this.infiniteLoop || this.selectedIndex != this.slides.length - 1) {
      this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
    }
  }

  decrementSelectedIndex() {
    if (this.infiniteLoop || this.selectedIndex != 0) {
      this.selectedIndex = (this.selectedIndex - 1 + this.slides.length) % this.slides.length;
    }
  }

  nextIndex() {
    if (this.directionLoop == 'toLeft') {
      this.decrementSelectedIndex();
    } else {
      this.incrementSelectedIndex();
    }
  }

  prevIndex() {
    if (this.directionLoop == 'toLeft') {
      this.incrementSelectedIndex();
    } else {
      this.decrementSelectedIndex();
    }
  }

  nextSlide($event: any) {
    $event.stopPropagation();
    this.incrementSelectedIndex();
  }

  prevSlide($event: any) {
    $event.stopPropagation();
    this.decrementSelectedIndex();
  }

  toSlide($event: any, selectedSlide: number) {
    $event.stopPropagation();
    this.selectedIndex = selectedSlide;
    this.resetTimer();
    this.startTimer();
  }

  toggleAutoPlay($event: any) {
    $event.stopPropagation();
    this.autoPlay = !this.autoPlay;
    this.resetTimer();
    this.startTimer();
  }
}
