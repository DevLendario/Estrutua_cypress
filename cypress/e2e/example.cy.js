describe('Teste de exemplo - Cypress', () => {
  it('Visita a página principal e verifica texto', () => {
    cy.visit('/');
    cy.contains('Kitchen Sink').should('exist');
  });

  it('Interage com um campo de e-mail', () => {
    cy.visit('/commands/actions');
    cy.get('.action-email').type('teste@example.com').should('have.value', 'teste@example.com');
  });
});
