import RegistrationPage from "../../../Shared/pageObjects/RegistrationPage";
import faker from "@faker-js/faker";
import LoginPage from "../../../Shared/pageObjects/loginPage";

let email: string;
describe("User is able to register and login", () => {
  it("User can register", function () {
    const registrationPage = new RegistrationPage();
    registrationPage.getUsernameInput().type(faker.name.findName());
    email = faker.internet.email();
    registrationPage.getEmailInput().type(email);
    registrationPage.getPasswordInput().type("password");
    registrationPage.getSignUpButton().click();
    cy.url().should("equal", Cypress.config().baseUrl + "/#/");
  });
  it("User can login", function () {
    const loginPaage = new LoginPage();
    loginPaage.getEmailInput().type(email);
    loginPaage.getPasswordInput().type("password");
    loginPaage.getSignUpButton().click();
    cy.url().should("equal", Cypress.config().baseUrl + "/#/");
  });
});
