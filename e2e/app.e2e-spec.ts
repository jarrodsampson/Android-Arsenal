import { ArsenalPage } from './app.po';

describe('arsenal App', () => {
  let page: ArsenalPage;

  beforeEach(() => {
    page = new ArsenalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
