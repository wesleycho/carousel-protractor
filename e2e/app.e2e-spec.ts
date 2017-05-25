import { CarouselProtractorPage } from './app.po';

describe('carousel-protractor App', () => {
  let page: CarouselProtractorPage;

  beforeEach(() => {
    page = new CarouselProtractorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
