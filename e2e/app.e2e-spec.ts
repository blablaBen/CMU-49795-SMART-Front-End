import { CmuSmartFrontendPage } from './app.po';

describe('cmu-smart-frontend App', function() {
  let page: CmuSmartFrontendPage;

  beforeEach(() => {
    page = new CmuSmartFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
