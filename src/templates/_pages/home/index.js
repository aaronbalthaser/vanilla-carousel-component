import dot from 'dot';
import template from './home.txt';

const TemplateHomePage = (data) => {
  const templateFunction = dot.template(template);

  return templateFunction(data);
};

export default TemplateHomePage;
