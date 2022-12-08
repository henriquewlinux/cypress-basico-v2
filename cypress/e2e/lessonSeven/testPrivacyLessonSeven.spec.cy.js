describe('Central de Atendimento ao Cliente TAT', () => {
  it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
  });
});