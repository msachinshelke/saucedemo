import { World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import Login from "./pages-objects/login";
import { PageObjects } from "./types";

class SauceWorld extends World {
  context: BrowserContext;

  mock: boolean;

  page: Page;

  browser: Browser;

  username: string;

  password: string;

  pageObjects: PageObjects;
  getLogin() {
    if (!this.pageObjects?.login) {
      throw new Error('"Login" is not defined');
    }

    return this.pageObjects.login;
  }

  setupPageObjects(page: Page) {
    this.pageObjects = {
      login: new Login(page), // No need to cast 'page' to 'any' in JavaScript
    };
  }
}

export default SauceWorld;

/*

The selected TypeScript code defines a class SauceWorld that extends a parent class World. This class contains two methods: getLogin and setupPageObjects.

The getLogin method is a getter that retrieves the login object from the pageObjects property of the SauceWorld instance. If the login object is not defined (i.e., it is undefined or null), it throws an error with the message "Login" is not defined. This is a defensive programming technique to ensure that the login object is available before it's used elsewhere in the code. The ?. operator is called the optional chaining operator, which allows you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

The setupPageObjects method is used to initialize the pageObjects property. It takes one argument page of type Page (or a subtype of Page). Inside this method, pageObjects is set to an object that contains a login property. The login property is assigned a new instance of the Login class, which is created using the new keyword and passing the page argument to the Login constructor. The comment in the code indicates that there's no need to cast page to any in JavaScript, which is a way of bypassing TypeScript's type checking.

Finally, the SauceWorld class is exported using module.exports, which allows it to be imported and used in other files. This is a common pattern in Node.js modules.

*/
