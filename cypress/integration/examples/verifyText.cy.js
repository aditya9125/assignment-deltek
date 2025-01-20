describe('Text Normalization Test', () => {
    it('Finds an element with normalized text', () => {
      
        cy.visit('/verifytext');
  
      // Find the element using normalize-space in XPath
      cy.xpath("//span[normalize-space(.)='Welcome UserName!']")
        .should('be.visible')
        .and('contain.text', 'Welcome UserName!');
    });
  });