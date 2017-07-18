import { AppAngularWebPage } from './app.po';

describe('app-angular-web App', () => {
  let page: AppAngularWebPage;

  beforeEach(() => {
    page = new AppAngularWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
