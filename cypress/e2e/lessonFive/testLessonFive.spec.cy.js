describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('marca ambos checkboxes, depois desmarca o último', function () {
    cy.get('input[type="checkbox"]')
      .should('have.length', 2)
      .each(checkbox => {
        cy.wrap(checkbox).check()
        cy.wrap(checkbox).should('be.checked')
      })
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked')
  })
})
