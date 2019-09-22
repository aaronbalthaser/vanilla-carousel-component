import { Page } from './';

import { Carousel } from '../components/Carousel';

import TemplateCarousel from '../templates/carousel';

import constants from '../constants';

export const HomePage = (template) => {

  const page = new Page({
    template: template
  });

  let random = Math.max(Math.floor(Math.random() * 12), 6);

  page.render();

  fetch(constants.slideImages + random)
    .then((response) => response.json())
    .then(data => {

      const carousel = new Carousel({
        template: TemplateCarousel(data),
        containerId: 'carousel'
      });

      carousel.render();

      carousel.show();

    });

  page.show();
};
