import { ASocketChatPage } from './app.po';

describe('asocket-chat App', () => {
  let page: ASocketChatPage;

  beforeEach(() => {
    page = new ASocketChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
