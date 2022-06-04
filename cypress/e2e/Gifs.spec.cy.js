describe("finding gifs", () => {
  it("should type a search item, find it and them check if the Ver Mais button have the right href", () => {
    cy.visit("/");
    cy.get('input[name="search"]').type("react");
    cy.get("button")
      .contains(/procurar/i)
      .click();
    cy.get(".containerComGifs").should("exist");
    cy.get(".containerComGifs .gifItem").should("have.length", 20);
    cy.get("button")
      .contains(/ver mais/i)
      .should("have.attr", "href")
      .and("eq", "https://giphy.com/search/react");
  });

  it("should search for popular gifs", () => {
    cy.visit("/");
    cy.get("button")
      .contains(/popular/i)
      .click();
    cy.get(".containerComGifs").should("exist");
    cy.get(".containerComGifs .gifItem").should("have.length", 20);
  });
});
