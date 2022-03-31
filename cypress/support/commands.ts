import faker from "@faker-js/faker";

let token;
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      register(value: void): Chainable<Element>;
      createArticle(
        title: string,
        description: string,
        body: string,
        tags: string[]
      ): Chainable<Element>;
    }
  }
}

export function register() {
  if(window.localStorage.getItem("userInfo")==null){
    let name = faker.name.findName();
    let email = faker.internet.email();
    cy.log("new user registered: "+email)
      cy.request({
        method: "POST",
        url: Cypress.env("api_server") + "/api/users",
        body: {
          email: email,
          password: "password",
          username: name,
        },
      }).then((resp) => {
        token = resp.body.data.token;
        window.localStorage.setItem(
          "userInfo",
        //  '{"token":"' + resp.body.data.token + '"}'
        '{"username":"'+name+'","email":"'+email+'","password":null,"id":"38f451e0-27e9-47ec-b869-60f31aa7a11a","createdAt":"2022-03-30T18:38:37.000Z","updatedAt":null,"deletedDate":null,"token":"'+token+'"}'
        );
      });
  }
}

export function createArticle(
  title: string,
  description: string,
  body: string,
  tags: string[]
) {
  cy.request({
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    url: Cypress.env("api_server") + "/api/articles",
    body: {
      title: title,
      description: description,
      body: body,
      tagList: tags,
    },
  }).then((resp) => {
    expect(resp.status).to.eq(201);
  });
}
Cypress.Commands.add("register", register);
Cypress.Commands.add("createArticle", createArticle);
