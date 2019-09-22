import { Component } from '../Component';

const DEFAULTS = {
  containerId: 'body'
};

export class Header extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    super.render.apply(this, arguments);
  }
}