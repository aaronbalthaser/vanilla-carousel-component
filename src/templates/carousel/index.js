import dot from 'dot';
import template from './carousel.txt';

const TemplateCarousel = (data) => {
  const templateFunction = dot.template(template);

  return templateFunction(data);
};

export default TemplateCarousel;
