export default {
  default: {
    tags: process.env.npm_config_TAGS || "",
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["./playwright/features/*.feature"],
    publishQuiet: true,
    dryRun: false,
    require: [
      "cucumber.node.js",
      "./playwright/axe-utils.ts",
      "./playwright/common-hooks.ts",
      "./playwright/setup-utils.ts",
      "./playwright/types.ts",
      "./playwright/world.ts",
      "./playwright/pages-objects/login.ts",
      "./playwright/steps-definitions/login-steps.ts",
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 1,
  },
  rerun: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    publishQuiet: true,
    dryRun: false,
    require: [
      "cucumber.node.js",
      "./playwright/axe-utils.ts",
      "./playwright/common-hooks.ts",
      "./playwright/setup-utils.ts",
      "./playwright/types.ts",
      "./playwright/world.ts",
      "./playwright/pages-objects/login.ts",
      "./playwright/steps-definitions/login-steps.ts",
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt",
    ],
    parallel: 2,
  },
};
