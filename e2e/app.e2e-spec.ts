import { Angualr01Page } from './app.po';

describe('angualr01 App', function() {
  let page: Angualr01Page;

  beforeEach(() => {
    page = new Angualr01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
