import { AppPage } from './app.po';
import { conditionPage } from "./pages/condition.page";
//Title of the page
describe('weather-application App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

// please run ng e2e for results.