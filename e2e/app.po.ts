import { browser, by, element } from 'protractor';

export class CarouselProtractorPage {
  navigateTo() {
    return browser.get('/');
  }

  getCarouselSlideTitle() {
    return element(by.css('.carousel-item.active .carousel-caption h3')).getText();
  }

  waitForSlideChange() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5003);
    });
  }
}
