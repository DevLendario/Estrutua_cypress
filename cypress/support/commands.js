// comandos customizados de exemplo
/* global Cypress cy */

Cypress.Commands.add('loginExemplo', (email) => {
  cy.get('.action-email').type(email);
});
