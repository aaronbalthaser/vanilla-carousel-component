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

    // mothod bindings
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOverHandler = debounce(this.mouseOverHandler, 20);
  }

  render() {
    super.render.apply(this, arguments);

    this.componentContainer = document.querySelector(this.componentSelector);
    this.slides = document.querySelectorAll(constants.slidesSelector);
    this.slides[this.activeSlide].classList.add(constants.slideActiveClass);
    this.length = this.slides.length;
    this.ltControl = document.querySelector(constants.sliedLtControl);
    this.rtControl = document.querySelector(constants.slideRtControl);
  }

  show() {
    super.show.apply(this, arguments);
  }

  initializeEvents() {
    this.controls = document.querySelector(constants.slideControls);
    this.controls.addEventListener('click', this.controlsHandler.bind(this));

    this.dots = document.querySelector(constants.slideDotsSelector);
    this.dots.addEventListener('click', this.dotNavigationHandler.bind(this));

    this.componentContainer = this.componentContainer || document.querySelector(this.componentSelector);
    this.componentContainer.addEventListener('mousemove', this.mouseOverHandler.bind(this));
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

  mouseOverHandler(event) {
    console.log('mouse over handler');
  }

  dotNavigationHandler(event) {
    if (event && event.target) {
      let index = event.target.dataset[constants.index];

      this.removeActiveClass();
      this.updateSlide(index);
    }
  }

  goBack() {
    if (this.activeSlide < 1) {
      this.activeSlide = this.length - 1;
    } else {
      this.activeSlide--;
    }

    this.removeActiveClass();
    this.updateSlide(this.activeSlide);
  }

  goForward() {
    if (this.activeSlide === this.length - 1) {
      this.activeSlide = 0;
    } else {
      this.activeSlide++;
    }

    this.removeActiveClass();
    this.updateSlide(this.activeSlide);
  }

  removeActiveClass() {
    this.slides.forEach(slide => {
      slide.classList.remove('active');
    });
  }

  updateSlide(slide) {
    this.slides[slide].classList.add(constants.slideActiveClass);
  }
}

Carousel.DEFAULTS = DEFAULTS;
