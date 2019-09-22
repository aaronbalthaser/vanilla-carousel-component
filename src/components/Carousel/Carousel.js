import { Component } from '../Component';

const DEFAULTS = {
  containerId: 'carousel-container',
  template: null,
  parentSelector: 'main',
  hiddenClass: 'hidden'
};

export class Carousel extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    super.render.apply(this, arguments);
  }
}

Carousel.DEFAULTS = DEFAULTS;
