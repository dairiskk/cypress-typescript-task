class LoginPage {
    constructor() {
      cy.visit('/#/login');
    }
  
    visit() {
      cy.visit('/#/login');
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
  
  export default LoginPage;