describe('Overlapping Element Test', () => {
    it('Finds an element with normalized text', () => {
      
      cy.visit('/overlapped');

      const textValue="aditya";
      cy.get('input#name').as('name')
        .scrollIntoView({timeout: 2000})
        .debug()
        .should('be.visible')
        .type(textValue)
        .then(function(){
            cy.get('@name')
            .should('have.value',textValue)
        })
    });
  });