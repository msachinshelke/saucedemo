import { Page } from "playwright";

export default class Login {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  loginLocator = {
    userName: "#user-name",
    password: "#password",
    loginButton: "#login-button",
  };

  async loginToApp(username: string, password: string) {
    await this.page.locator(this.loginLocator.userName).fill(username);
    await this.page.locator(this.loginLocator.password).fill(password);
    await this.page.locator(this.loginLocator.loginButton).click();
    await this.page.waitForLoadState("networkidle");
  }
}
