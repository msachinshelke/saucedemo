import { BeforeStep, Given } from "@cucumber/cucumber";
import SauceWorld from "../world";

let world: SauceWorld;
let username = "standard_user";
let password = "secret_sauce";

BeforeStep(async function (this: SauceWorld) {
  world = this;
});

// Given("User is logged into SauceDemo application", async function () {
//   await world.getLogin().loginToApp(username, password);

//   // isLoggedIn = true;

//   // await expect(world.page).toHaveTitle("Mix.dashboard");

//   // await world.page.waitForLoadState("domcontentloaded");
// });

Given("User is logged into SauceDemo application", async function () {
  await world.getLogin().loginToApp(username, password);
});