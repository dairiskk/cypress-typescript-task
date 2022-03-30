class NewArticlePage {
    constructor() {
      cy.visit('/#/editor');
    }
  
    visit() {
      cy.visit('/#/editor');
    }


    getTitleInput() {
        return cy.get(`input[name='title']`);
    }
      getAboutInput() {
        return cy.get(`input[name='description']`);
    }
    getWriteArticleInput() {
      return cy.get(`textarea[name='body']`);
  }
  getTagInput() {
    return cy.get(`input[name='tagList']`);
}
    getPublishButton() {
      return cy.get(`button[type='submit']`);
  }
  }
  
  export default NewArticlePage;