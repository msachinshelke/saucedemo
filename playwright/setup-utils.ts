
import { chromium, firefox, request, webkit, Browser } from "playwright";
import config from "./config";
export async function openBrowser() {
  let browser: Browser;

  switch (config.browser) {
    case "firefox":
      browser = await firefox.launch(config.browserOptions);
      break;
    case "webkit":
      browser = await webkit.launch(config.browserOptions);
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }

  return browser;
}
