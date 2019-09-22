const DEFAULTS = {
  containerId: '',
  template: '',
  parentSelector: '',
  hiddenClass: 'hidden'
};

export class Component {
  constructor(options) {
    this._options(options);

    this.containerId = this.options.containerId;
    this.name = this.options.name || Object.getPrototypeOf(this).constructor.name;
    this.namespace = this.options.namespace || this.name.toLowerCase();
    this.template = this.options.template;

    if (this.options.parentSelector) {
      this.container = document.querySelector(this.options.parentSelector);
    } else {
      this.container = this.options.template.getElementById(this.containerId);
    }
    console.log(this.container);
    this.rendered = false;
  }

  render() {
    // console.log('Component render');
    this.hide();

    this.renderTemplate.apply(this, arguments);
    this.postRender.apply(this, arguments);
    this.rendered = true;
  }

  postRender() {
    // console.log('Component postRender');
    if (!this.rendered) {
      this.renderOnce.apply(this, arguments);
    }
  }

  renderTemplate() {
    // console.log('Component renderTemplate');

  }

  renderOnce() {
    // console.log('Component renderOnce');
    this.initializeEvents();
    this.renderOnce = () => { };
  }

  initializeEvents() { }

  show() {
    // console.log('Component show');
    this.container.classList.remove(this.options.hiddenClass);
    this.container.setAttribute('aria-hidden', false);
  }

  hide() {
    // console.log('Component hide');
    this.container.classList.add(this.options.hiddenClass);
    this.container.setAttribute('aria-hidden', true);
  }

  _options(options) {
    this.options = Object.assign({}, DEFAULTS, this._defaults(), options || {});
  }

  _defaults() {
    return Object.getPrototypeOf(this).constructor.DEFAULTS;
  }
}

Component.DEFAULTS = DEFAULTS;
