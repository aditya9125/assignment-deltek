describe('Overlapping Element Test', () => {
    it('Finds an element with normalized text', () => {
      
      cy.visit('/disabledinput');

      const textValue="deltek";
      cy.get('button#enableButton')
      .click()

      //cy.wait(5000)

      cy.get('input#inputField', {timeout: 5500})
      .should('be.enabled')
      .type(textValue)

    });
  });