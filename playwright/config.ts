import { BrowserContextOptions, LaunchOptions } from "@playwright/test";

const browserOptions: LaunchOptions = {
  args: ["--start-maximized", "--window-position=-5,0"],
  devtools: false,
  // downloadsPath: "./playwright/downloads",
  headless: !(process.env.HEADLESS === "true"),
};

const contextOptions: BrowserContextOptions = {
  acceptDownloads: true,
  ignoreHTTPSErrors: true,
  recordVideo: process.env.PWVIDEO ? { dir: "screenshots" } : undefined,
  viewport: { height: 720, width: 1280 },
};

const config = {
  // accessCode: process.env.ACCESS_CODE || "",
  browser: process.env.BROWSER || "chromium",
  browserOptions,
  contextOptions,
  defaultTimeout: 10 * 1000,
};

export default config;

/* The selected TypeScript code defines configuration options for launching a browser and creating a browser context using Playwright, a Node.js library for browser automation.

First, a constant browserOptions of type LaunchOptions is defined. This object contains several properties:

args: This is an array of command-line arguments to pass to the browser instance. Here, --start-maximized starts the browser in maximized mode, and --window-position=-5,0 sets the initial position of the browser window.
devtools: This is a boolean indicating whether to auto-open developer tools panel for each tab. It's set to false, so the devtools won't open.
headless: This is a boolean indicating whether to run browser in headless mode. It's set to true unless the HEADLESS environment variable is specifically set to "false".
Next, a constant contextOptions of type BrowserContextOptions is defined. This object contains several properties:

acceptDownloads: This is a boolean indicating whether to automatically accept all download prompts. It's set to true, so all downloads will be accepted.
ignoreHTTPSErrors: This is a boolean indicating whether to ignore HTTPS errors during navigation. It's set to true, so HTTPS errors will be ignored.
recordVideo: This is an object that, if provided, will record videos of the browser sessions. The directory for the videos is set to "screenshots" if the PWVIDEO environment variable is set; otherwise, no videos will be recorded.
viewport: This is an object specifying the size of the viewport. Here, the width is set to 1280 pixels and the height is set to 720 pixels.
Finally, a constant config is defined. This object contains several properties:

browser: This is a string indicating which browser to use. It's set to the BROWSER environment variable if provided; otherwise, it defaults to "chromium".
browserOptions: This is the browserOptions object defined earlier.
contextOptions: This is the contextOptions object defined earlier.
defaultTimeout: This is a number indicating the default timeout in milliseconds for all actions. Here, it's set to 10,000 milliseconds (or 10 seconds).
The config object is then exported as the default export of the module, allowing it to be imported in other modules or files in the project. */
