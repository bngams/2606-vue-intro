describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('http://localhost:5173');
      cy.contains('h1', 'Welcome');
      //expect(true).to.equal(true)
    })
})