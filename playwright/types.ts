import { World } from "@cucumber/cucumber";

import Login from "./pages-objects/login";

export interface PageObjects {
  login: Login;
}






/*The selected TypeScript code defines an interface named PageObjects. An interface in TypeScript is a way to define a contract for a certain structure of an object. This means that any object that claims to be of type PageObjects must adhere to this structure.

In this case, the PageObjects interface has a single property login of type Login. This means that any object of type PageObjects must have a login property, and the value of this property must be of type Login.

The export keyword before the interface declaration means that this interface is not only declared, but also exported from the module where it's defined. This makes the PageObjects interface available to be imported in other modules or files in the project. This is a common practice in TypeScript and JavaScript modules when you want to share code across multiple files.*/