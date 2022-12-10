it('Mostrar o gato', function () {
  cy.visit('./src/index.html')
  cy.get('#cat').should('not.be.visible').invoke('show').should('be.visible')
})
