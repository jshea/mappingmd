import { ChrisPage } from './app.po';

describe('chris App', () => {
  let page: ChrisPage;

  beforeEach(() => {
    page = new ChrisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
