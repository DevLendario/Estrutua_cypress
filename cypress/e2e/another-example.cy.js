describe('Outro teste de exemplo - Cypress', () => {
  it('Resposta HTTP da baseUrl deve ser 200', () => {
    cy.request('/').its('status').should('eq', 200);
  });

  it('Usa comando customizado para preencher e validar e-mail', () => {
    cy.visit('/commands/actions');
    cy.loginExemplo('novo-teste@example.com');
    cy.get('.action-email').should('have.value', 'novo-teste@example.com');
  });
});
