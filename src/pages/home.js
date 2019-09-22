import { Page } from './';

import { Carousel } from '../components/Carousel';

import TemplateCarousel from '../templates/carousel';

import constants from '../constants';

export const HomePage = (template) => {

  const page = new Page({
    template: template
  });

  page.render();

  let imagesData = [];

  for (let i = 0; i < 8; i++) {
    let num = i + 1;


    imagesData.push({
      url: 'https://placeimg.com/1200/400/any',
      author: 'Aaron Balthaser'
    });
  }

  const carousel = new Carousel({
    template: TemplateCarousel({ data: imagesData }),
    containerId: 'carousel'
  });

  carousel.render();
  carousel.show();

  page.show();
};
