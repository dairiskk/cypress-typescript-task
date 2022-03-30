class RegistrationPage {
    constructor() {
      cy.visit('/register');
    }
  
    visit() {
      cy.visit('register');
    }
  
    getUsernameInput() {
      return cy.get("input[name='username']");
    }

    getEmailInput() {
        return cy.get(`input[name='email']`);
    }
      getPasswordInput() {
        return cy.get(`input[name='password']`);
    }
    getSignUpButton() {
      return cy.get(`button[type='submit']`);
  }
  }
  
  export default RegistrationPage;