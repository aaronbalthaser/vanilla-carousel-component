import { Component } from '../Component';

import './Carousel.scss';

const DEFAULTS = {
  containerId: 'carousel-container'
};

export class Carousel extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    super.render.apply(this, arguments);
  }

  show() {
    super.show.apply(this, arguments);
  }

  initializeEvents() {
    const slides = document.querySelectorAll('.slide');

    slides[0].classList.add('active');
  }
}

Carousel.DEFAULTS = DEFAULTS;
