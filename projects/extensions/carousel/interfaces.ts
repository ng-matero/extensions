export interface MtxCarouselOption {
  [k: string]: any;
  timings: string;
  interval: number;

  autoPlay: boolean;
  pauseOnHover: boolean;
  loop: boolean;

  hideArrows: boolean;
  arrowBack: string;
  arrowForward: string;
  hideIndicators: boolean;

  swipeSupport: boolean;
  keySupport: boolean;
  mouseSupport: boolean;
}
