describe('Text Normalization Test', () => {
    it('Finds an element with normalized text', () => {
      
        cy.visit('/verifytext');

      cy.xpath("//span[normalize-space(.)='Welcome UserName!']")
        .should('be.visible')
        .and('contain.text', 'Welcome UserName!');
    });
  });