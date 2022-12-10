describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('exibe e esconde as mensagens de sucesso e erro usando o .invoke()', function () {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('preenche a area de texto usando o comando invoke', function () {
    const longtext = Cypress._.repeat('teste ', 20)

    cy.get('#open-text-area')
      .invoke('val', longtext)
      .should('have.value', longtext)
  })

  it.only('faz uma requisição HTTP', () => {
    cy.request({
      method: 'GET',
      url: 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'
    }).then(response => {
      console.log(response)
      expect(response.status).to.equal(200)
      expect(response.body).to.include('CAC TAT')
      expect(response.statusText).to.equal('OK')
    })
  })
})
