describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('seleciona um arquivo da pasta fixtures', function () {
    cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('cypress/downloads/file.txt')
      .should(function (input) {
        expect(input[0].files[0].name).to.equal('file.txt')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', function () {
    cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('cypress/downloads/file.txt', { action: 'drag-drop' })
      .should(function (input) {
        expect(input[0].files[0].name).to.equal('file.txt')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function () {
    cy.fixture('file.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(function (input) {
        expect(input[0].files[0].name).to.equal('file.json')
      })
  })
})
