import './Button.scss';

export class Button {
  btnClass = 'btn';

  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');

    button.innerHTML = 'Hello';
    button.classList.add(this.btnClass);

    body.appendChild(button);
  }
}
