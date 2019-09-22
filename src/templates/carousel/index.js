import dot from 'dot';
import template from './carousel.txt';

const TemplateCarousel = (data) => {
  const templateFunction = dot.template(template);
  const dom = document.createRange().createContextualFragment(templateFunction(data));

  return dom;
};

export default TemplateCarousel;
