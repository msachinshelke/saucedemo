
import * as setupUtils from "./setup-utils";
import config from "./config";
import { injectAxe } from "axe-playwright";
import { AfterAll, Before, BeforeAll } from "@cucumber/cucumber";

BeforeAll(async function () {
  global.browser = await setupUtils.openBrowser();
  global.context = await global.browser.newContext(config.contextOptions);
  global.page = await global.context.newPage();
  await injectAxe(global.page);
});

Before(async function (scenario) {
  // set value for global appURL, this is used in oauthRedirection
  global.appURL = this.parameters.appURL;
  this.browser = global.browser;
  this.context = global.context;
  this.page = global.page; 
});

AfterAll(async function () {
  await global.browser.close();
});
