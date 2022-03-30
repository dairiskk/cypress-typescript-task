import faker from "@faker-js/faker";
import NewArticlePage from "../../../Shared/pageObjects/NewArticlePage";
import { DataGenerator } from "../../../Shared/Helpers/DataGenerator";
import CreatedArticlePage from "../../../Shared/pageObjects/CreatedArticlePage";
import GlobalFeedPage from "../../../Shared/pageObjects/GlobalFeedPage";

describe("Can create 11 articles and see them in Global Feed", () => {
  let articleData = DataGenerator.generateArticleData(11);
  let globalFeedPage = new GlobalFeedPage();
  before(() => {
    cy.register();
  });
  it("Can create 1 article and validate it after creation", function () {
    const newArticle = new NewArticlePage();

    newArticle.getTitleInput().type(articleData[0].title);
    newArticle.getAboutInput().type(articleData[0].about);
    newArticle.getWriteArticleInput().type(articleData[0].body);
    newArticle.getTagInput().type(articleData[0].tag[0]);
    newArticle.getPublishButton().click();

    const createdArticle = new CreatedArticlePage();
    createdArticle.getAbout().contains(articleData[0].about);
    createdArticle.getTagInput().contains(articleData[0].tag[0]);
    createdArticle.getTitle().contains(articleData[0].title);
    createdArticle.getWriteArticle().contains(articleData[0].body);
  });

  it("Can validate article in Global Feed", function () {
    globalFeedPage.visit();
    globalFeedPage.validateArticle(articleData[0]);
  });
  it("Can create 10 more articles and validate them in global feed", function () {
    //create 10 more articles with api
    for (let i = 1; i < articleData.length; i++) {
      cy.createArticle(
        articleData[i].title,
        articleData[i].body,
        articleData[i].body,
        articleData[i].tag
      );
    }

    globalFeedPage.visit();
    globalFeedPage.validateArticles(articleData);
  });
});
