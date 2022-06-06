describe("finding gifs", () => {
  it("deve renderizar os gifs de acordo com o termo digitado após o usuário clicar em PROCURAR. Quando o botão POPULAR for clicado, deve exibir os gifs POPULARES", () => {
    cy.visit("/");
    cy.get('[data-cy="input"]').type("react");
    cy.checkGifs("search");
    cy.get('[data-cy="see-more"]').should(
      "have.attr",
      "href",
      "https://giphy.com/search/react"
    );
    cy.get('[data-cy="home"]').click();
    cy.checkGifs("popular");
  });
});
