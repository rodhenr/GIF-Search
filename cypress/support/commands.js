Cypress.Commands.add("checkGifs", (name) => {
  cy.get(`[data-cy="btn-${name}"]`).click();
  cy.get('[data-cy="have-gifs"]').should("be.visible");
  cy.get('[data-cy="gif-item"]').should("have.length", 20);
});

Cypress.Commands.add("checkInfo", (nameOne, nameTwo, textOne, textTwo) => {
  cy.get(`[data-cy="item-${nameOne}"]`)
    .should("be.visible")
    .and("have.text", textOne);
  cy.get(`[data-cy="item-${nameTwo}"]`)
    .should("be.visible")
    .and("have.text", textTwo);
});
