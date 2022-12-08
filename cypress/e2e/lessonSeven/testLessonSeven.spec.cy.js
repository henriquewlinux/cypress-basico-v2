describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('#privacy > a').should('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('#privacy > a').invoke('removeAttr', 'target').click()

    // Assert opção 1
    cy.contains('Talking About Testing').should('be.visible')

    // Assert Opção 2
    //cy.get('#title').should('have.text', 'CAC TAT - Política de privacidade')
  })
})
