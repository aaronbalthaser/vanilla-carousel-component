import { element } from './utils';
import { Router } from './Router';

import TemplateNavigation from './templates/navigation';
import TemplateHomePage from './templates/_pages/home';
import TemplateAboutPage from './templates/_pages/about';
import TemplateContactPage from './templates/_pages/contact';

import { HomePage, AboutPage, ContactPage } from './pages';

import './app.scss';

(function () {
  const body = document.querySelector('body');

  body.id = 'body';

  let main = element({
    name: 'main',
    id: 'main',
    node: body
  });

  let nav = element({
    name: 'nav',
    id: 'navigation',
    node: main
  });

  nav.innerHTML = TemplateNavigation();
  body.appendChild(nav);

  // Router:
  const router = new Router();

  router.route('/', 'home', () => {
    HomePage(TemplateHomePage());
  });

  router.route('/about', 'about', () => {
    AboutPage(TemplateAboutPage);
  });

  router.route('/contact', 'contact', () => {
    ContactPage(TemplateContactPage);
  });

  function routerHandler() {
    const path = location.hash.slice(1) || '/';

    router.get(path, (route) => {
      if (route.controller) {
        route.controller();
      }
    });
  }

  window.addEventListener('load', routerHandler);
  window.addEventListener('hashchange', routerHandler);

}());
