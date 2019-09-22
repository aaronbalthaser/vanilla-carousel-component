import dot from 'dot';
import template from './navigation.txt';

const TemplateNavigation = (data) => {
  const templateFunction = dot.template(template);

  return templateFunction(data);
};

export default TemplateNavigation;
