class CreatedArticlePage {
  getTitle() {
    return cy.get(`div[class='banner'] h1`);
  }
  getAbout() {
    return cy.get(`div[class='row article-content'] div`).find("div");
  }
  getWriteArticle() {
    return cy.get(`div[class='row article-content'] div p`);
  }
  getTagInput() {
    return cy.get(`ul[class='tag-list pull-xs-right'] li`);
  }
}

export default CreatedArticlePage;
