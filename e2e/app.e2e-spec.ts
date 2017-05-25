import { CarouselProtractorPage } from './app.po';

describe('carousel-protractor App', () => {
  let page: CarouselProtractorPage;

  beforeEach(() => {
    page = new CarouselProtractorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();

    expect(page.getCarouselSlideTitle()).toBe('First slide label');

    return page.waitForSlideChange()
      .then(() => {
        expect(page.getCarouselSlideTitle()).toBe('Second slide label');
      });
  });
});
