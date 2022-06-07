describe("procurando por gifs", () => {
  it("deve renderizar os gifs de acordo com o termo digitado ou exibir os itens populares quando clicado em POPULAR. Também faz a checagem da informação exibida de acordo com o nome do termo pesquisado e quantidade de itens exibidos", () => {
    cy.visit("/");
    cy.get('[data-cy="no-gifs"]')
      .should("have.text", "Nenhum item para exibir")
      .and("be.visible");
    cy.get('[data-cy="input"]').type("react");
    cy.checkGifs("search");
    cy.checkInfo("searched", "qtd", "REACT", "20");
    cy.get('[data-cy="see-more"]').should(
      "have.attr",
      "href",
      "https://giphy.com/search/react"
    );
    cy.get('[data-cy="home"]').click();
    cy.get('[data-cy="no-gifs"]')
      .should("have.text", "Nenhum item para exibir")
      .and("be.visible");
    cy.checkGifs("popular");
    cy.checkInfo("searched", "qtd", "POPULAR", "20");
  });
});
