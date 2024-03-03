
import * as setupUtils from "./setup-utils";
import config from "./config";
import { injectAxe } from "axe-playwright";
import { AfterAll, Before, BeforeAll, setDefaultTimeout, setWorldConstructor } from "@cucumber/cucumber";
import SauceWorld from "./world";
import { DEFAULT_TIMEOUT } from './data/constants';

setDefaultTimeout(DEFAULT_TIMEOUT);
setWorldConstructor(SauceWorld);

BeforeAll(async function () {
  global.browser = await setupUtils.openBrowser();
  global.context = await global.browser.newContext(config.contextOptions);
  global.page = await global.context.newPage();
  // return injectAxe(global.page);
});

Before(async function (scenario) {
  // set value for global appURL, this is used in oauthRedirection
  global.appURL = this.parameters.appURL;
  this.browser = global.browser;
  this.context = global.context;
  this.page = global.page; 
  this.setupPageObjects(this.page);
});

AfterAll(async function () {
  await global.browser.close();
});
