import RegistrationPage from '../../../Shared/pageObjects/RegistrationPage';
import faker from '@faker-js/faker';

describe('User is able to regiter', () => {
    it('Check strongType', function () {
        const registration = new RegistrationPage();
        registration.getUsernameInput().type(faker.name.findName())
        registration.getEmailInput().type(faker.internet.email())
        registration.getPasswordInput().type("password")
        registration.getSignUpButton().click()
        cy.url().should('equal', Cypress.config().baseUrl)
    });
});