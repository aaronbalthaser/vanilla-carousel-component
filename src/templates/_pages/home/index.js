import dot from 'dot';
import template from './home.txt';

const TemplateHomePage = (data) => {
  const templateFunction = dot.template(template);
  const dom = document.createRange().createContextualFragment(templateFunction(data));

  return dom;
};

export default TemplateHomePage;
