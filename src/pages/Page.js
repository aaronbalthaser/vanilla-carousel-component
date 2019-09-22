import { Component } from '../components';

const DEFAULTS = {
  containerId: 'main',
  parentSelector: '#main'
};

export class Page extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    // console.log('Page render');
    super.render.apply(this, arguments);
  }

  postRender() {
    // console.log('Page postRender');
    super.postRender();
  }

  renderOnce() {
    // console.log('Page renderOnce');
    super.renderOnce();
  }

  show() {
    // console.log('Page show');
    super.show.apply(this, arguments);
  }
}

Page.DEFAULTS = DEFAULTS;
