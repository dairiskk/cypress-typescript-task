class GlobalFeedPage {
  constructor() {
   
  }


visit(){
  cy.visit("/");
  cy.get('a').contains('Global Feed').click()
}
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

  validateArticles(articles: ArticleDo[]){
    cy.get("div[class='article-preview']").each((item, index) => {
      expect(articles[index].title).to.equal(item.find('h1').text())
      expect(articles[index].body).to.equal(item.find('p').text())
      expect(articles[index].tag).to.equal(item.find('ul li').text())
  });
  }
  validateArticle(article: ArticleDo){
    cy.get("div[class='article-preview']").contains(article.title)
    cy.get("div[class='article-preview']").contains(article.body)
    cy.get("div[class='article-preview']").contains(article.tag[0])
  }

}

export default GlobalFeedPage;
