Cypress.Commands.add("checkGifs", (name) => {
  cy.get(`[data-cy="btn-${name}"]`).click();
  cy.get('[data-cy="have-gifs"]').should("be.visible");
  cy.get('[data-cy="gif-item"]').should("have.length", 20);
});
