import dot from 'dot';
import template from './contact.txt';

const TemplateContactPage = (data) => {
  const templateFunction = dot.template(template);

  return templateFunction(data);
};

export default TemplateContactPage;
