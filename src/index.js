import { Button } from './components/Button/Button';
import dot from 'dot';

import template from './views/template.txt';

(function () {
  const body = document.querySelector('body');

  // Dot JS use example:
  const data = [{ name: 'Aaron' }, { name: 'Mark' }, { name: 'Brian' }];
  const templateFunction = dot.template(template);
  const html = templateFunction(data);

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;

  body.appendChild(wrapper);

  // Component instantiation example:
  const button = new Button();
  button.render();

  // Env access:
  console.log(process.env.NODE_ENV)
}());
