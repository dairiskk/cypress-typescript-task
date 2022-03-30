import faker from "@faker-js/faker";

export class DataGenerator {
  public static generateArticleData(numberOfArticles: number) {
    let articles: ArticleDo[] = [];

    for (let i = 0; i < numberOfArticles; i++) {
      let article: ArticleDo = {
        title: "title " + faker.random.uuid(),
        about: "about " + faker.company.bsBuzz(),
        body: "body " + faker.commerce.productDescription(),
        tag: ["tag" + faker.name.lastName()],
      };
      articles.push(article);
    }
    return articles;
  }
}
