import { Component } from '../Component';

import debounce from '../../utils/debounce';

import './Carousel.scss';

import constants from '../../constants';

const DEFAULTS = {
  containerId: 'carousel'
};

export class Carousel extends Component {
  constructor(options) {
    super(options);

    const { componentSelector, auto, delay } = options;

    this.componentSelector = componentSelector;
    this.auto = auto;
    this.delay = delay || 5000;
    this.activeSlide = 0;
    this.side = null;
  }

  render() {
    super.render.apply(this, arguments);

    this.componentContainer = document.querySelector(this.componentSelector);
    this.slides = document.querySelectorAll(constants.slidesSelector);
    this.slides[this.activeSlide].classList.add(constants.active);
    this.length = this.slides.length;
    this.ltControl = document.querySelector(constants.sliedLtControl);
    this.rtControl = document.querySelector(constants.slideRtControl);
    this.dots = document.querySelectorAll(constants.slideDotSelector);
    this.dots[0].classList.add(constants.active);
  }

  show() {
    super.show.apply(this, arguments);
  }

  initializeEvents() {
    this.controls = document.querySelector(constants.slideControls);
    this.controls.addEventListener('click', this.controlsHandler.bind(this));

    this.dotsContainer = document.querySelector(constants.slideDotsSelector);
    this.dotsContainer.addEventListener('click', this.dotNavigationHandler.bind(this));
  }

  // Carousel methods:
  controlsHandler(event) {
    if (event && event.target) {
      let direction = event.target.dataset[constants.direction];

      if (direction === constants.slideControlDirLt) {
        this.goBack();
      }

      if (direction === constants.slideControlDirRt) {
        this.goForward();
      }
    }
  }

  dotNavigationHandler(event) {
    if (event && event.target && event.target.getAttribute('data-index')) {
      this.activeSlide = parseInt(event.target.dataset[constants.index]);

      this.removeSlideActiveClass();
      this.updateSlideActiveClass(this.activeSlide);

      this.removeDotActiveClass();
      this.updateDotActiveClass(this.activeSlide);
    }
  }

  goBack() {
    if (this.activeSlide < 1) {
      this.activeSlide = this.length - 1;
    } else {
      this.activeSlide--;
    }

    this.removeSlideActiveClass();
    this.updateSlideActiveClass(this.activeSlide);

    this.removeDotActiveClass();
    this.updateDotActiveClass(this.activeSlide);
  }

  goForward() {
    if (this.activeSlide === this.length - 1) {
      this.activeSlide = 0;
    } else {
      this.activeSlide++;
    }

    this.removeSlideActiveClass();
    this.updateSlideActiveClass(this.activeSlide);

    this.removeDotActiveClass();
    this.updateDotActiveClass(this.activeSlide);
  }

  removeDotActiveClass() {
    this.dots.forEach(dot => {
      dot.classList.remove(constants.active);
    });
  }

  updateDotActiveClass(dot) {
    this.dots[dot].classList.add(constants.active)
  }

  removeSlideActiveClass() {
    this.slides.forEach(slide => {
      slide.classList.remove(constants.active);
    });
  }

  updateSlideActiveClass(slide) {
    this.slides[slide].classList.add(constants.active);
  }
}

Carousel.DEFAULTS = DEFAULTS;
