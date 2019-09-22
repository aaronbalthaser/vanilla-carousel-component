import dot from 'dot';
import template from './about.txt';

const TemplateAboutPage = (data) => {
  const templateFunction = dot.template(template);

  return templateFunction(data);
};

export default TemplateAboutPage;
